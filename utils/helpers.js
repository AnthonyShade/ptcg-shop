const date = require('date-and-time');

module.exports = {
  format_date: (now) => {
    return date.format(now, 'DD MMMM YYYY');
  },
  format_url: (url) => {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
  times: (n, block) => {
    var accum = "";
    for (var i = 0; i < n; ++i) accum += block.fn(i);
    return accum;
  },
};