// Show Sub Actions
$('.open-sub-actions').click(() => {
  $('.sub-actions').slideToggle('slow');
});

// Hide Sub Actions
$('.close-sub-actions').click(() => {
  $('.sub-actions').slideUp('fast');
});

// Send Airtime
if ($('.open-send-airtime').length) {
  $('.open-send-airtime').on('click', () => {
    $('.send-airtime').toggleClass('send-airtime-show', 'linear');
  });
  $('.close').on('click', () => {
    $('.send-airtime').removeClass('send-airtime-show');
  });
  $('body').on('click', (event) => {
    if (
      !$(event.target).closest('.open-send-airtime').length &&
      !$(event.target).closest('.send-airtime').length
    ) {
      $('.send-airtime').removeClass('send-airtime-show');
    }
  });
}

// Send Data
$('.open-send-data').on('click', () => {
  $('.send-data').toggleClass('send-data-show', 'linear');
});
$('.close').on('click', () => {
  $('.send-data').removeClass('send-data-show');
});
$('body').on('click', (event) => {
  if (
    !$(event.target).closest('.open-send-data').length &&
    !$(event.target).closest('.send-data').length
  ) {
    $('.send-data').removeClass('send-data-show');
  }
});
