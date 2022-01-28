(function ($) {
  "use-strict";

  // Show header__topbar In Mobile
  $(".header_mobile_toggle").click(function () {
    $(".main-header_search").removeClass("main-header_active");
    $(".main-header__topbar").toggleClass("main-header_active");
  });

  // Show header__search In Mobile
  $(".search_mobile_toggle").click(function () {
    $(".main-header__topbar").removeClass("main-header_active");
    $(".main-header_search").toggleClass("main-header_active");
  });


  // Show Aside In Mobile
  $(".aside_mobile_toggle").click(function () {
    $(".main-aside-overlay").toggleClass("main-aside-overlay-avtive");
    $(".main-aside").toggleClass("main-aside-active");
  });


  // Show Aside In header_menu In Mobile
  $(".menu_mobile_toggle").click(function () {
    $(".main-aside-overlay").toggleClass("main-aside-overlay-avtive");
    $(".main-header_menu").toggleClass("main-header_menu-active ");
  });


  // Remove Aside In header_menu And Aside In Mobile
  $(document).on("click", ".main-aside-overlay-avtive", function () {
    $(".main-aside-overlay").removeClass("main-aside-overlay-avtive");
    $(".main-aside").removeClass("main-aside-active");
    $(".main-header_menu").removeClass("main-header_menu-active ");
  });


  // Close Aside In Mobile
  $(".aside_mobile_close").click(function () {
    $(".main-aside-overlay").removeClass("main-aside-overlay-avtive");
    $(".main-aside").removeClass("main-aside-active");
  });


  // Close header_menu In Mobile
  $(".menu_mobile_close").click(function () {
    $(".main-aside-overlay").removeClass("main-aside-overlay-avtive");
    $(".main-header_menu").removeClass("main-header_menu-active ");
  });


  $('.main-menu__toggle').click(function () {
    $(this).closest('.main-menu__item').siblings().find('.main-menu__submenu').slideUp();
    $(this).closest('.main-menu__item').find('.main-menu__submenu').slideToggle();
    $(this).closest('.main-menu__item').siblings().removeClass('is-open');
    $(this).closest('.main-menu__item').toggleClass('is-open')
  });



  /*------------------------------------
		selectpicker
	--------------------------------------*/
  $(".selectpicker").selectpicker({
    noneResultsText: 'لا يوجد نتائج'
  });





  /*------------------------------------
		datetimepicker
	--------------------------------------*/
  $('.datetimepicker_1').datetimepicker({
    format: "yyyy/mm/dd",
    todayHighlight: true,
    autoclose: true,
    startView: 2,
    minView: 2,
    forceParse: 0,
    pickerPosition: 'bottom-right',
  });

  $('.datetimepicker_2').datetimepicker({
    pickDate: false,
    minuteStep: 5,
    pickerPosition: 'bottom-right',
    format: 'HH:ii',
    autoclose: true,
    showMeridian: true,
    startView: 1,
    maxView: 1,
  });




  /*------------------------------------
		summernote
	--------------------------------------*/
  $('.summernote').summernote({
    tabsize: 2,
    height: 200,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });




  /*------------------------------------
  PerfectScrollbar
	--------------------------------------*/
  $('.scroll , .modal-scroll  ,.main-aside ').each(function () {
    const ps = new PerfectScrollbar($(this)[0]);
  });




  /*------------------------------------
	--------------------------------------*/
  $('select.select-pages').on('changed.bs.select', function () {
    $('.row-summernote').hide();
    $('.summernote-' + $(this).val()).fadeIn();
  }).val("1");





  /*------------------------------------
	--------------------------------------*/
  $(".img-load").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".img-show").attr("src", e.target.result);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });





  /*------------------------------------
	--------------------------------------*/
  $('select.select-permission').on('changed.bs.select', function (e) {
    var options = $('select.select-permission option:selected');
    var selected = [];
    $(options).each(function () {
      selected.push($(this).text());
      var $combine = selected.join('<p>')
      $('.permission-text').html('<p>' + $combine + '</p>')
      $('.permission-text').html()
    });
    if (options.length == 0) {
      $('.permission-text p').remove()
    }

  });



  /*------------------------------------
	--------------------------------------*/
  $('.add-addres').click(function () {
    $('.list-addresses').append(`
    <div class="row align-items-center mb-3 row-addres">
      <div class="col-lg-3 col-10">
        <div class="form-group mb-0"><input class="form-control" type="text" placeholder="نص تجريبي يتم استبداله فيما بعد" /></div>
      </div>
      <div class="col-lg-1 col-2">
        <button type="button" class="bg-transparent delete-addres">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g id="Close_Square" data-name="Close Square" transform="translate(0 0)">
              <g id="Group_11716" data-name="Group 11716" transform="translate(9.994 -4.145) rotate(45)">
                <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(7.604 7.595)" fill="none" stroke="#01003c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
              </g>
              <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" transform="translate(0.751 0.75)" fill="none" stroke="#01003c" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    `)
  });




  /*------------------------------------
	--------------------------------------*/
  $(document).on('click', '.delete-addres', function () {
    $(this).closest('.row-addres').remove()
  });



  /*------------------------------------
	--------------------------------------*/
  $('.btn-add-stage').click(function () {
    $('.list-stages').append(
      `
      <div class="row align-items-center mb-4 row-stage">
        <div class="col-3">
          <h4>نوع المدخل</h4>
        </div>
        <div class="col-7">
          <select class="selectpicker" data-size="5" title="نص تجريبي">
            <option>محرر</option>
            <option>كاتب</option>
            <option>محرر</option>
          </select>
        </div>
        <div class="col-2">
          <button class="btn-delete-stage"><img src="assets/images/svg/minus.svg" alt="" /></button>
        </div>
      </div>
      `
    )
    $(".selectpicker").selectpicker();
  });



  /*------------------------------------
	--------------------------------------*/
  $(document).on('click', '.btn-delete-stage', function () {
    $(this).closest('.row-stage').remove()
  });





  /*------------------------------------
	--------------------------------------*/
  const dt = new DataTransfer();
  $(".attachment").on('change', function (e) {
    for (var i = 0; i < this.files.length; i++) {
      let fileBloc = $('<div/>', {
          class: 'file-block'
        }),
        fileName = $('<div/>', {
          class: 'name',
          text: this.files.item(i).name
        });
      fileBloc.append('<div class="file-delete ms-2"><i class="fas fa-times"></i></div><div class="img ms-2"><img src="assets/images/pdf.png"></div> ')
        .append(fileName);
      $(".filesList > .files-names").append(fileBloc);
    };
    // Ajout des fichiers dans l'objet DataTransfer
    for (let file of this.files) {
      dt.items.add(file);
    }
    // Mise à jour des fichiers de l'input file après ajout
    this.files = dt.files;

    // EventListener pour le bouton de suppression créé
    $('div.file-delete').click(function () {
      let name = $(this).next('div.name').text();
      // Supprimer l'affichage du nom de fichier
      $(this).parent().remove();
      for (let i = 0; i < dt.items.length; i++) {
        // Correspondance du fichier et du nom
        if (name === dt.items[i].getAsFile().name) {
          // Suppression du fichier dans l'objet DataTransfer
          dt.items.remove(i);
          continue;
        }
      }
      // Mise à jour des fichiers de l'input file après suppression
      document.getElementById('attachment').files = dt.files;
    });
  });



   /*------------------------------------
	--------------------------------------*/
  if ($("html[dir='ltr'")) {
    $("body").find(".widget__item-card .dropdown .dropdown-menu").addClass("dropdown-menu-start");
  }

})(jQuery);






if ($("#chart").length > 0) {
  var options = {
    chart: {
      height: 450,
      type: 'area',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      area: {
        isRange: true
      }
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'رسم بياني للمهام',
      align: 'center'
    },
    series: [{
      name: "مهمة ",
      data: [50, 80, 50, 60, 70, 90, 80]
    }],
    labels: [
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
    ],
    colors: ['#01003C', '#fff'],
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#000',
          fontSize: '12px',
          fontFamily: 'Open Sans',
        }
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#93a4be',
          fontSize: '12px',
          fontFamily: 'Open Sans',
        }
      },
    },
  }

  var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
  );

  chart.render();
}

// 




// Generate DataTable
var table = $("#DataTable_1");
// begin first table
table.DataTable({
  responsive: true,
  bLengthChange: false,
  searching: false,
  bInfo: false,
  language: {
    'paginate': {
      'previous': 'السابق',
      'next': 'التالي'
    }
  },
  order: [
    [1, "desc"]
  ],

  headerCallback: function (thead, data, start, end, display) {
    thead.getElementsByTagName("th")[0].innerHTML = `
              <label class="m-checkbox mb-2">
                  <input type="checkbox">
                  <div class="checkmark"></div>
              </label>`;
  },

  columnDefs: [{
    targets: 0,
    width: "30px",
    className: "dt-right",
    orderable: false,
    render: function (data, type, full, meta) {
      return `
              <label class="m-checkbox mb-2">
                  <input type="checkbox">
                  <div class="checkmark"></div>
              </label>`;
    },
  }, ],
});

table.on("change", "thead th .m-checkbox", function () {
  var set = $(this).closest("table").find("td:first-child .m-checkbox input");
  var checked = $(this).find('input').is(":checked");

  $(set).each(function () {
    if (checked) {
      $(this).prop("checked", true);
      $(this).closest("tr").addClass("active");
    } else {
      $(this).prop("checked", false);
      $(this).closest("tr").removeClass("active");
    }
  });
});

table.on("change", "tbody tr .m-checkbox", function () {
  $(this).parents("tr").toggleClass("active");
});
// 
// 
// 


var table = $("#DataTable_2");
// begin first table
table.DataTable({
  responsive: true,
  bLengthChange: false,
  searching: false,
  bInfo: false,
  // "bPaginate": false,
  language: {
    'paginate': {
      'previous': 'السابق',
      'next': 'التالي'
    }
  },
  // Order settings
  order: [
    [1, "desc"]
  ],
});