var bg_image;

$(document).ready(function() {
    bg_image = $('.page-header-image[data-parallax="true"]');

    $.getJSON("assets/languages/en_EN.json", function(data){

      //$('#name').append(data.name);
      //$('#job').append(data.job);
      //$('#rol').append(data.rol);
      //$('#stack').append(data.stack);

      for ( skill of data.skills) {
        skill.list.forEach(item => {
          $(`#${skill.type}_list`).append(`
            <div class="info info-horizontal">
              <div class="icon">
                <i class="${item.icon} ${item.color}"></i>
              </div>
              <div class="description">
                <h5 class="info-title">${item.title}</h5>
              </div>
            </div>
          `);
        });
      }

    });
    
    $(window).on('scroll', applyParallax(function() {
      value = ($(window).scrollTop() / 3);
      bg_image.css({
        'transform': 'translate3d(0,' + value + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + value + 'px,0)',
        '-ms-transform': 'translate3d(0,' + value + 'px,0)',
        '-o-transform': 'translate3d(0,' + value + 'px,0)'
      });
    }));
});

function applyParallax(fun) {
  return function() {
    var argt = arguments;
    fun.apply(this, argt);
  };
};