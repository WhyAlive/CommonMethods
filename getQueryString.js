function getLocatoin() {
  let url = window.location.href.split('?')[1];
  var obj = {};
  // for (let i = 0; i < url.split('&').length; i++) {
  //   obj[url.split('&')[i].split('=')[0]] = url.split('&')[i].split('=')[1]
  // }
  url
    .split("&")
    .forEach(item => (obj[item.split("=")[0]] = item.split("=")[1]));
  return obj;
}
