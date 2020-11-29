$('.open-notification-list').on('click', () => {
  $('.notification-list').toggleClass('notification-list-show', 'linear');
});
$('.close').on('click', () => {
  $('.notification-list').removeClass('notification-list-show');
});
$('body').on('click', (event) => {
  if (
    !$(event.target).closest('.open-notification-list').length &&
    !$(event.target).closest('.open-notification-list').length
  ) {
    $('.notification-list').removeClass('notification-list-show');
  }
});
