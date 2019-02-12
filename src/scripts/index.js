import $ from 'jquery';
let user = {
  'avatar': "https://s3.amazonaws.com/uifaces/faces/twitter/jeremery/128.jpg",
  'createdAt': "2019-02-10T23:24:35.574Z",
  'id': "51",
  'name': "MAQ"
};
var newId;
let postpromise = $.post('https://5c6159a91325a20014976413.mockapi.io/users');
postpromise.then(function (data) {
  // console.log(data);
  newId = data.id;
  let getpromise = $.get('https://5c6159a91325a20014976413.mockapi.io/users/' + newId);
  getpromise.then(data => alert(data.name),
    () => alert('Error occurerd'));

}
  ,
  () => alert('error occured'));

