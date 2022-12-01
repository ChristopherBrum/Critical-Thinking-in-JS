# Mail COunt

```js
const emailData = "From: foo@bar.com#/#\nSubject: Nunc in justo eros. Aliquam.#/#\nDate: 07-27-2016#/#\nTo: foo@bar.com#/#\nEtiam convallis commodo tortor, dapibus auctor dolor semper consequat. Sed lobortis eros nec ante porta, eu placerat sapien interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consectetur et odio vitae volutpat. Curabitur imperdiet orci metus, et dignissim nisl lacinia non. Aenean volutpat diam in lorem iaculis, sit amet volutpat nibh dictum. Quisque vel vulputate nisi. Nam a vestibulum turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum leo id velit aliquet, at vestibulum ipsum molestie. Cras eu lobortis libero. In rutrum non leo id ultricies. Aliquam in ex ut nibh placerat sollicitudin vitae id magna.##||##\n\nFrom: baz@foo.com#/#\nSubject: Aenean cursus velit non arcu.#/#\nDate: 08-11-2016#/#\nTo: baz@foo.com#/#\nCras ex leo, faucibus id mollis a, dignissim sit amet metus. Sed dui massa, mollis in tristique ut, auctor quis tortor. Donec egestas velit purus, eget laoreet urna venenatis id. Etiam eget ultrices tortor. Duis venenatis leo mi, non porta est molestie at. Nulla lacus nisl, dapibus convallis massa ut, dignissim euismod lacus. Ut vel magna lectus. Morbi sit amet vulputate arcu. Cras non ante arcu. Nam tempor iaculis ipsum eget tincidunt. Praesent imperdiet varius dui, vel egestas ipsum porta in. Sed suscipit massa in neque lobortis congue.##||##\n\nFrom: qux@bar.com#/#\nSubject: Sed hendrerit felis in ex.#/#\nDate: 06-25-2016#/#\nTo: qux@bar.com#/#\nNulla quis est vitae orci tincidunt convallis sit amet ut libero. Sed eu facilisis justo. Maecenas sed ultrices urna. Sed malesuada justo sed magna sodales, eget congue dolor convallis. Vestibulum vel consectetur nunc. Morbi at tincidunt turpis, eget imperdiet orci. Curabitur laoreet ipsum a quam facilisis, eu aliquet lectus viverra. Maecenas ullamcorper rutrum dui, ac aliquet mi pulvinar sit amet.##||##\n\nFrom: quux@foo.com#/#\nSubject: Curabitur tincidunt elit nec risus.#/#\nDate: 07-24-2016#/#\nTo: quux@foo.com#/#\nCurabitur interdum dictum consectetur. Nulla facilisi. Quisque sed tellus consectetur, vestibulum quam sed, lacinia mauris. Nunc risus dolor, feugiat nec erat at, elementum tempor urna. Vivamus facilisis elementum congue. Cras dui libero, vehicula eget porttitor sed, sagittis quis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam lacinia nulla nisi, vel finibus ligula sodales quis. Maecenas vulputate, leo auctor venenatis pretium, lectus elit eleifend odio, nec molestie ligula ex eget tellus. Nullam a nibh ut enim efficitur elementum. Nunc non elit vitae tortor iaculis ornare in id risus. Integer finibus lobortis lorem, id rutrum elit congue id. In hac habitasse platea dictumst.##||##\n\nFrom: garply@foo.com#/#\nSubject: Integer nec nunc facilisis, ultricies.#/#\nDate: 07-03-2016#/#\nTo: garply@foo.com#/#\nFusce rhoncus purus nisi, vel blandit felis fermentum sed. Vestibulum ultricies rutrum dui nec vehicula. Proin quis semper nulla. Maecenas congue, leo nec feugiat dapibus, dui metus facilisis elit, non finibus leo nisl at est. Donec varius, turpis non pulvinar sodales, nulla nulla posuere ligula, nec eleifend quam metus ut tortor. Sed semper vestibulum mattis. Nullam et ornare eros. Aliquam sed pellentesque dui, ut consequat neque. Integer luctus turpis ultrices, congue erat mattis, vehicula tellus. Pellentesque tincidunt posuere nibh pretium tincidunt. In hac habitasse platea dictumst.";

/*
Problem:
Explicit Rules:
- write a function that takes one string as an argument (an email message)
- the function will parse the string data as follows
  - it prodcue two basic statistics about the string data
  1. the number of email messages found in the string
  2. the range of dates of the email messages
- the string data has these main characteristics
  - it contains multiple email messages separated by '##||##'
  - each email has five parts separated by '#/#'
  - these 5 parts are always included
  - the five parts are:
    1. sender
    2. subject
    3. date
    4. recipient
    5. body

Implicit Rules:
- the function will output strings according to the test case below
- the dates will be formatted from numbers to day - month - day - year, where day and month are appreviated words

DS:
Input: text (long string representing the text of an email)
Output: two lines logged to the console
Intermediate:
- string will be split into an array
- number for indexes
- date objects (most likely)

Goal: Write a function that takes a string (email text) as an argument, parse the string, and log the number of emails and a range of the emails dates to the console.

Abstractions:
- mapping to gather the dates for each email
- mapping to convert date strings to date objects
- sorting dates from oldest to newest

Algo:
--> function --> mailCount(string) --> strings logged to the console
  - split emailData by this delimiter '##||##'
  - map over each email message (emails)
    - declare dates as an empty array
    - split the email into array by the delimiter '#/#'
    - push the element at index 2 to 'dates'
    - return 'dates'
  - map over 'dates' to format 
    - identify the date portion of the string and return
  - find the min and max of 'dates'
  - log the length of 'dates'
  - log the range of dates
*/

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let emailDates = emails.map(email => {
                     let dates = [];
                     dates.push(email.split('#/#')[2])
                     return dates;
                   }).flat();

  let dates = emailDates.map(date => {
                return new Date(date.match(/\b\d{2}-\d{2}-\d{4}\b/g))
              });

  dates = dates.sort((date1, date2) => date1.getTime() - date2.getTime());
  let [ firstDate, lastDate ] = [dates[0], dates[4]];
  firstDate = formatDate(firstDate); 
  lastDate = formatDate(lastDate);

  console.log(`Count of Email: ${dates.length}`);
  console.log(`Date Range: ${firstDate} - ${lastDate}`);
}

function formatDate(date) {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = DAYS[date.getDay()];
  let month = MONTHS[date.getMonth()];
  let calendarDate = date.getDate();
  let year = date.getFullYear();
  let formattedDate = `${day} ${month} ${calendarDate} ${year}`;

  return formattedDate;
}

mailCount(emailData);
// console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
```
