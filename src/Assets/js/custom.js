/* ----------------- Start Document ----------------- */
(function($) {
    "use strict";
    $(document).ready(function() {
        /*--------------------------------------------------*/
        /*  Mobile Menu - mmenu.js
        /*--------------------------------------------------*/
        $(function() {
            function mmenuInit() {
                var wi = $(window).width();
                if (wi <= '991') {
                    $(".mmenu-init").remove();
                    /*$("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2')
                    	.find('ul, div').removeClass('style-1 style-2 mega-menu mega-menu-content mega-menu-section').removeAttr('id');*/

                    if ($('.user-sidebar').length == 1) {
                        var profile_name = $(".user-sidebar").find('.user-profile').find('h5').text();
                        var html = '<div class="mmenu-init"><ul>';
                        $('.user-sidebar > ul').each(function() {
                            html = html + $(this).html();
                        })
                        html = html + '</ul></div>';
                        $("#navigation").before(html);
                    } else {
                        $("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2')
                            .find('ul, div').removeClass('style-1 style-2 mega-menu mega-menu-content mega-menu-section').removeAttr('id');
                        $(".mmenu-init").find("ul").addClass("mm-listview");
                        $(".mmenu-init").find(".mobile-styles .mm-listview").unwrap();

                        $(".user-sidebar").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2')
                            .find('div').remove();
                    }

                    $(".mmenu-init").find("ul").addClass("mm-listview");
                    $(".mmenu-init").find(".mobile-styles .mm-listview").unwrap();

                    $(".mmenu-init").mmenu({
                        "counters": true
                    }, {
                        // configuration
                        offCanvas: {
                            pageNodetype: "#wrapper"
                        }
                    });

                    var mmenuAPI = $(".mmenu-init").data("mmenu");
                    var $icon = $(".mmenu-trigger .hamburger");

                    $(".mmenu-trigger").on('click', function() {
                        mmenuAPI.open();
                    });

                }
                $(".mm-next").addClass("mm-fullsubopen");
                if ($('.user-sidebar').length == 1) {
                    $(".mmenu-init").find('#mm-1').find('.mm-title').html(profile_name);
                }
            }
            mmenuInit();
            $(window).resize(function() {
                mmenuInit();
            });
        });



        function stickyHeader() {
            if ($('#header-container').length && $('#header-container').hasClass('header-sticky')) {
                //console.log('ok');
                var header_position = $('#header-container').offset(),
                    lastScroll = 80;
                $(window).on('scroll load', function(event) {
                    var st = $(this).scrollTop();
                    if (st > header_position.top) {
                        $('#header-container').addClass("header-fixed");
                        $('#header-container').removeClass("transparentH");
                    } else {
                        $('#header-container').removeClass("header-fixed");
                        $('#header-container').addClass("transparentH");
                    }

                    if (st > lastScroll && st > header_position.top) {
                        $('#header-container').addClass("hidden-menu");                        
                    } else if (st <= lastScroll) {
                        $('#header-container').removeClass("hidden-menu");
                    }

                    lastScroll = st;

                    if (st === 0) {
                        $('#header-container').removeClass("header-fixed");
                    }
                });
            }
        }
        // Sticky Header Init
        stickyHeader();


        /*--------------------------------------------------*/
        /*  Transparent Header Spacer Adjustment
        /*--------------------------------------------------*/
        $(window).on('load resize', function() {
            var transparentHeaderHeight = $('.transparent-header').outerHeight();
            $('.transparent-header-spacer').css({
                height: transparentHeaderHeight,
            });
        });

        $('.footer-links > h4 > a').click(function() {
            $(this).parent().parent().find('ul.foot-nav').slideToggle('slow');
            $(this).toggleClass('active');
        });
        $('#filter').click(function() {
            $('.filter').slideToggle('slow');
            $('body').addClass('overflow-none');
        });
        $('.close_filter').click(function() {
            $('.filter').slideToggle('slow');
            $('body').removeClass('overflow-none');
        });
        var w = $(window).width();
        if (w < 992) {
            $('.messages-inbox ul > li').click(function() {
                $('.message-content').show();
                $('.messages-inbox').hide();
            });
            $('.back-message').click(function() {
                $('.message-content').hide();
                $('.messages-inbox').show();
            });
        }
        if (typeof($('.phone-number').html() != 'undefined')) {
            $('.phone-number').on('keypress', function(e) {
                if (e.keyCode == 46) {
                    return false;
                }
            });
        }

        var offset = parseInt(page_limit);
        var is_load_more = true;
        $('.load-more').on('click', function() {
            var append_data = true;
            var post_url = '';
            var act = $(this).attr('data-act');
            var form = {
                'offset': offset,
                'act': act
            };

            if (act == 'load-myproperty') {
                var is_sort = $('#sort_by').attr('data-sort');
                var sort = $('#sort_by').val();
                if (is_sort == 'y') {
                    $('#sort_by').attr('data-sort', 'n');
                    form.offset = 0;
                    offset = 0;
                    append_data = false;
                    /*var total_display = $('.list-display .card ').length;
                    form.limit = total_display;*/
                    is_load_more = true;
                }
                if (sort == null) {
                    sort = 'recent';
                }
                form.sort_by = sort;
                if (typeof $(this).attr('data-prid') != 'undefined') {
                    form.prid = $(this).attr('data-prid');
                }
            } else if (act == 'load-property' || act == 'load-project') {
                post_url = location.search;
                form.property_type = property_type;
                form.property_for = property_for;
                var is_sort = $('#sort_by').attr('data-sort');
                var sort = $('#sort_by').val();
                if (is_sort == 'y') {
                    $('#sort_by').attr('data-sort', 'n');
                    form.offset = 0;
                    offset = 0;
                    append_data = false;
                    is_load_more = true;
                }
                if (sort == null) {
                    sort = 'recent';
                }
                form.sort_by = sort;
                if ($('#propsearchfilter #city').val() != null && $('#propsearchfilter #city').val() != '') {
                    form.city = $('#propsearchfilter #city').val();
                }
                if ($('#propsearchfilter #address').val() != null && $('#propsearchfilter #address').val() != '') {
                    form.address = $('#propsearchfilter #address').val();
                }
                if ($('#propsearchfilter #proptype').val() != null && $('#propsearchfilter #proptype').val() != '') {
                    form.property_type = $('#propsearchfilter #proptype').val();
                }
                if ($('#propsearchfilter #proptypefor').val() != null && $('#propsearchfilter #proptypefor').val() != '') {
                    form.proptypefor = $('#propsearchfilter #proptypefor').val();
                }
                if ($('#propsearchfilter #post_since').val() != null && $('#propsearchfilter #post_since').val() != '') {
                    form.post_since = $('#propsearchfilter #post_since').val();
                }
                var property_for2 = '';
                var rooms = '';
                var bathrooms = '';
                var post_by = '';
                $('#propsearchfilter input[name="property_for"]:checked').each(function() {
                    property_for2 += $(this).val() + ',';
                });
                $('#propsearchfilter .rooms:checked').each(function() {
                    rooms += $(this).val() + ',';
                });
                $('#propsearchfilter .bathrooms:checked').each(function() {
                    bathrooms += $(this).val() + ',';
                });
                $('#propsearchfilter .post-by input:checked').each(function() {
                    post_by += $(this).val() + ',';
                });
                if (property_for2 != '') {
                    property_for2 = property_for2.substr(0, (property_for2.length - 1));
                    form.property_for2 = property_for2;
                }
                if (rooms != '') {
                    rooms = rooms.substr(0, (rooms.length - 1));
                    form.rooms = rooms;
                }
                if (bathrooms != '') {
                    bathrooms = bathrooms.substr(0, (bathrooms.length - 1));
                    form.bathrooms = bathrooms;
                }
                if (post_by != '') {
                    post_by = post_by.substr(0, (post_by.length - 1));
                    form.post_by = post_by;
                }
            } else if (act == 'load-property-review') {
                form.page = $(this).attr('data-page');
            } else if (act == 'load-agent') {
                var filter_form = $('#filter_form').attr('data-filter');
                if (filter_form == 'y') {
                    $('#filter_form').attr('data-filter', 'n');
                    form.offset = 0;
                    offset = 0;
                    append_data = false;
                    is_load_more = true;
                }
                form.city = $('#filter_form #city').val();
                form.address = $('#filter_form #address').val();
            }

            if (!is_load_more) {
                return false;
            }

            $('.loading').show();
            $.ajax({
                url: site_url + 'common/getdataajax' + post_url,
                type: 'post',
                dataType: 'json',
                data: form,
                success: function(response) {
                    $('.loading').hide();
                    if (response.success) {
                        var inc_offset = false;
                        if (act == 'load-property-review') {
                            $('#reviewPopupSection .popup-data .proj-info__about__text').append(response.data);
                            $('.overlay').show();
                            rmClassAll('open-state');
                            $('#reviewPopupSection').addClass('open-state').show();
                            $('#reviewPopupSection .pop-header').addClass('open-state');
                        } else {
                            if (response.data.row != '') {
                                inc_offset = true;
                                if (!append_data) {
                                    $('.list-display').empty();
                                }
                                $('.list-display').append(response.data.row);
                            }
                            if (response.data.grid != '') {
                                if (!append_data) {
                                    $('.grid-display .row').empty();
                                }
                                $('.grid-display .row').append(response.data.grid);
                            }
                            if (response.data.count != 0) {
                                $('.text-primary-filter').html(response.data.count);
                                $('.text-primary-filter').show();
                                $('.text-primary').hide();
                                $('.text-primary-default').hide();
                            }
                        }
                        if (inc_offset) {
                            offset += parseInt(page_limit);
                        }
                        if (!response.data.nd) {
                            is_load_more = false;
                        }
                        if(is_load_more){
                            $('.load-more').show();
                        }else{
                            $('.load-more').hide();
                        }
                        
                    } else {

                        if (response.data.count == 0) {
                            $('.text-primary-default').html(response.data.count);
                            $('.text-primary-default').show();
                            $('.text-primary').hide();
                            $('.text-primary-filter').hide();
                        }

                        $('.load-more').hide();
                        is_load_more = false;
                        if (act == 'load-property-review') {
                            $('.overlay').show();
                            rmClassAll('open-state');
                            $('#reviewPopupSection').addClass('open-state').show();
                            $('#reviewPopupSection .pop-header').addClass('open-state');
                        }
                        if (!append_data) {
                            $('.list-display').empty();
                            $('.grid-display .row').empty();
                            $('.load-more').hide();
                        }
                    }
                },
                error: function(err) {
                    console.log('Error: ', err);
                }
            });
        });

        if (typeof $('.agent_message').html() != 'undefined') {
            $('.agent_message').submit(function() {
                var act = $(this).attr('data-post');
                var action = $(this).attr('action'); //.split('=');
                var form = new FormData($(this)[0]);
                // form.append('ag', action[1]);
                form.append('ag', action);
                form.append('act', act);
                $.ajax({
                    url: site_url + 'common/messagepost',
                    type: 'post',
                    dataType: 'json',
                    data: form,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        $('.loading').hide();
                        if (response.success) {
                            var html = '<div class="alert alert-success alert-dismissible fade show message-post" role="alert">' + response.message + '</div>';
                            $('.message-post').remove();
                            if (act == 'posttoagent') {
                                $(html).insertBefore($('#agent_message'));
                            } else if (act == 'messagetoagent') {
                                $('.main-row').prepend(html);
                                $('.modal').modal('hide');
                                $("html, body").animate({
                                    scrollTop: "0"
                                });
                            }
                            $('#agent_message')[0].reset();
                        }
                    },
                    error: function(err) {
                        console.log('Error: ', err);
                    }
                });
                return false;
            });
        }

       

        if (typeof $('#mortgage_calculator').html() != 'undefined') {
            $('#mortgage_calculator').submit(function() {
                var act = $(this).attr('data-post');
                var action = $(this).attr('action').split('=');
                var form = new FormData($('#mortgage_calculator')[0]);
                form.append('name', action[1]);
                form.append('act', act);
                $.ajax({
                    url: site_url + 'common/mortgagecalculator',
                    type: 'post',
                    dataType: 'json',
                    data: form,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        $('.loading').hide();
                        if (response.success) {
                            var currency = $('#mortgage_calculator .currency-txt').html();
                            var term = $('#mortgage_calculator #pay_term option:selected').text();
                            $('#mortgage_calculator')[0].reset();
                            $('.mortgage-calculator-emi strong').html(term + ' EMI is ' + currency + ' ' + response.data);
                            $('.mortgage-calculator-emi').show();
                            $('#mortgage_calculator').hide();
                        }
                    },
                    error: function(err) {
                        console.log('Error: ', err);
                    }
                });
                return false;
            });
            $('.mortgage-calculator-again').on('click', function() {
                $('.mortgage-calculator-emi').hide();
                $('#mortgage_calculator').show();
            });
        }

        if (typeof $('.ads-fav').html() != 'undefined') {
            $('.ads-fav').on('click', function() {
                var fav_unfav = 'unfav';
                if ($(this).find('.icon-line-awesome-heart-o').length > 0) {
                    fav_unfav = 'fav';
                }
                var obj = $(this);
                var act = $(this).attr('data-act');
                var page = $(location).attr('pathname');
                if (act == 'favourite2') {
                    page = $(this).attr('data-href');
                }
                if (act == 'favourite3') {
                    page = $(this).attr('data-href');
                }
                var form = new FormData();
                form.append('act', act);
                form.append('req', fav_unfav);
                form.append('page', page);
                $('.alert').remove();
                $.ajax({
                    url: site_url + 'common/favunfav',
                    type: 'post',
                    dataType: 'json',
                    data: form,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        if (response.success) {
                            obj.toggleClass('active');
                            if (obj.find('.icon-line-awesome-heart-o').length > 0) {
                                obj.find('i').removeClass('icon-line-awesome-heart-o').addClass('icon-line-awesome-heart');
                                obj.attr('title', 'Remove');
                            } else {
                                obj.find('i').removeClass('icon-line-awesome-heart').addClass('icon-line-awesome-heart-o');
                                obj.attr('title', 'Save for later');
                            }
                        } else {
                            var html = '<div class="alert alert-danger alert-dismissible fade show message-post" role="alert">' + response.message + '</div>';
                            $('.main-row').prepend(html);
                        }
                    },
                    error: function(err) {
                        console.log('Error: ', err);
                    }
                });
                return false;
            });
        }

        if (typeof $('.modal').html() != 'undefined') {
            $('.modal .modal-header button.close, .modal-close').on('click', function() {
                $('.modal').modal('hide');
            });
        }

        var cache_address = {};
        if (typeof $('.address-box-wrap').html() != 'undefined') {
            $('.address-box').autocomplete({
                minLength: 2,
                autoFocus: true,
                source: function(request, response) {
                    var term = request.term;
                    if (term in cache_address) {
                        response(cache_address[term]);
                        return;
                    }

                    var form = new FormData();
                    form.append('term', term);
                    if ($('.address-box-wrap .address-box').hasClass('address-city')) {
                        form.append('act', 'getaddrc');
                    } else {
                        form.append('act', 'getaddr');
                    }
                    if (typeof $('#property_location_city').val() != 'undefined') {
                        if ($('#property_location_city').val() > 0) {
                            form.append('city', $('#property_location_city').val());
                        }
                    } else if (typeof $('#city').val() != 'undefined') {
                        if ($('#city').val() > 0) {
                            form.append('city', $('#city').val());
                        }
                    }

                    $.ajax({
                        url: site_url + 'common/getloaddata',
                        type: 'post',
                        dataType: 'json',
                        data: form,
                        contentType: false,
                        processData: false,
                        success: function(response2) {
                            if (response2.success) {
                                cache_address[term] = response2.data;
                                response(response2.data);
                            } else {
                                response(response2.data);
                            }
                        },
                        error: function(err) {
                            console.log('Error: ', err);
                        }
                    });
                },
                select: function(event, ui) {
                    if ($('.address-box-wrap').hasClass('ui-ck')) {
                        $('.address-box-wrap .address-box').val(ui.item.value);
                        if (typeof $('#sort_by').html() != 'undefined') {
                            $('#sort_by').attr('data-sort', 'y');
                        } else if (typeof $('#filter_form').html() != 'undefined') {
                            $('#filter_form').attr('data-filter', 'y');
                        }
                        $('.load-more').trigger('click');
                    }
                }
            });
        }

        if (typeof $('#searchfilter').html() != 'undefined') {
            $('#searchfilter').on('submit', function() {
                var property_for = $('.search-form .nav .nav-item a.active').attr('id');
                // var property_type = 'residential';
                
                switch (property_for) {
                    case 'pills-buy-tab':
                        property_for = 'property-for-sale';
                        break;
                    case 'pills-rent-tab':
                        property_for = 'property-for-rent';
                        break;
                    case 'pills-commercial-tab':
                        property_for = 'property-for-sale-rent';
                        break;
                    case 'pills-hostel-tab':
                        property_for = 'property-for-sale-rent';
                        break;
                }

                var has_data = false;
                var url = site_url + property_for;
                $(this).attr('action', url);
                var location = $('#searchfilter #location').val().trim();
                if (location != '') {
                    var pos = location.lastIndexOf(',');
                    var city = location.substr(pos + 2);
                    var locality = location.substr(0, pos);
                    city = city.replace(/ /g, '-');
                    locality = locality.replace(/ /g, '-');
                    $('#searchfilter #cityname').val(city);
                    $('#searchfilter #locality').val(locality);
                    has_data = true;
                } else {
                    $('#searchfilter #cityname').remove();
                    $('#searchfilter #locality').remove();
                }
                if ($('#searchfilter #proptype').val() == null) {
                    $('#searchfilter #proptype').remove();
                } else {
                    has_data = true;
                }
                if ($('#searchfilter #propfor').val() == null) {
                    $('#searchfilter #propfor').remove();
                } else {
                    has_data = true;
                }
                if ($('#searchfilter #budget').val() == null) {
                    $('#searchfilter #budget').remove();
                    $('#searchfilter #budgetmin').remove();
                    $('#searchfilter #budgetmax').remove();
                } else {
                    var budget_arr = $('#searchfilter #budget').val();
                    budget_arr = budget_arr.replace(/AED/g, '');
                    budget_arr = budget_arr.split('-');
                    budget_arr[0] = budget_arr[0].replace(/[^0-9]/g, '');
                    $('#searchfilter #budgetmin').val(budget_arr[0]);
                    if (budget_arr[1] != 'undefined') {
                        budget_arr[1] = budget_arr[1].replace(/[^0-9]/g, '');
                        $('#searchfilter #budgetmax').val(budget_arr[1]);
                    }
                    has_data = true;
                }
                if ($('#searchfilter #size').val() == null) {
                    $('#searchfilter #size').remove();
                    $('#searchfilter #propsizemin').remove();
                    $('#searchfilter #propsizemax').remove();
                    $('#searchfilter #propsizearea').remove();
                } else {
                    var size_arr = $('#searchfilter #size').val();
                    size_arr = size_arr.split('-');
                    if (size_arr.length > 1) {
                        var propsizearea = size_arr[0].replace(/[0-9]/g, '');
                        if (propsizearea.trim() == '') {
                            propsizearea = size_arr[1].replace(/[0-9]/g, '');
                        }
                        var propsizemin = size_arr[0].replace(/[a-zA-Z]/g, '');
                        var propsizemax = size_arr[1].replace(/[a-zA-Z]/g, '');
                        $('#searchfilter #propsizemin').val(propsizemin.trim());
                        $('#searchfilter #propsizemax').val(propsizemax.trim());
                        // $('#searchfilter #propsizearea').val('sq_ft');
                    } else if (size_arr.length == 1) {
                        size_arr = size_arr[0].toLowerCase();
                        size_arr = size_arr.replace('above', '');
                        var propsizearea = size_arr.replace(/[0-9]/g, '');
                        var propsizemin = size_arr.replace(/[a-zA-Z]/g, '');
                        $('#searchfilter #propsizemin').val(propsizemin.trim());
                        $('#searchfilter #propsizemax').val('');
                        // $('#searchfilter #propsizearea').val('sq_ft');
                    }
                    has_data = true;
                }

                if ($('#searchfilter #no_of_bedrooms').val() == null) {
                    $('#searchfilter #bedrooms').remove();
                } else{
                    var bedrooms = $('#searchfilter #no_of_bedrooms').val();
                    $('#searchfilter #bedrooms').val(bedrooms);
                     has_data = true;
                }

                if ($('#searchfilter #bathrooms_count').val() == null) {
                    $('#searchfilter #bathrooms').remove();
                } else{
                    var bedrooms = $('#searchfilter #bathrooms_count').val();
                    $('#searchfilter #bathrooms').val(bedrooms);
                     has_data = true;
                }

                if ($('#searchfilter #parking_avail').val() == null) {
                    $('#searchfilter #parking').remove();
                } else{
                    var parking = $('#searchfilter #parking_avail').val();
                    $('#searchfilter #parking').val(parking);
                    has_data = true;
                }

                if ($('#searchfilter #prop_status').val() == null) {
                    $('#searchfilter #property_status').remove();
                } else{
                    var parking = $('#searchfilter #prop_status').val();
                    $('#searchfilter #property_status').val(parking);
                    has_data = true;
                }

                if ($('#searchfilter #postedby').val() == null) {
                    $('#searchfilter #posted_by').remove();
                } else{
                    var parking = $('#searchfilter #postedby').val();
                    $('#searchfilter #posted_by').val(parking);
                    has_data = true;
                }

                if ($('#searchfilter #floors_count').val() == null) {
                    $('#searchfilter #floors').remove();
                } else{
                    var floors = $('#searchfilter #floors_count').val();
                    $('#searchfilter #floors').val(floors);
                    has_data = true;
                }

                if ($('#searchfilter #facing_direction').val() == null) {
                    $('#searchfilter #facing').remove();
                } else{
                    var facing = $('#searchfilter #facing_direction').val();
                    $('#searchfilter #facing').val(facing);
                    has_data = true;
                }

                if ($('#searchfilter input[name=postedsince]').val() == null) {
                    $('#searchfilter #posted_since').remove();
                } else{
                    var posted_since = $('#searchfilter input[name=postedsince]').val();
                    $('#searchfilter #posted_since').val(posted_since);
                    has_data = true;
                }

                // if ($('#searchfilter #bathrooms').val() == null) {
                //     $('#searchfilter #bathrooms').remove();
                // } if ($('#searchfilter #posted_by').val() == null) {
                //     $('#searchfilter #posted_by').remove();
                // } if ($('#searchfilter #posted_since').val() == null) {
                //     $('#searchfilter #posted_since').remove();
                // } if ($('#searchfilter #parking').val() == null) {
                //     $('#searchfilter #parking').remove();
                // } if ($('#searchfilter #facing').val() == null) {
                //     $('#searchfilter #facing').remove();
                // } 
               
                // alert(url);return false;
                if (!has_data) {
                    window.location.href = url;
                    return false;
                }
                return true;
            });
        }

        if (typeof $('#propsearchfilter').html() != 'undefined') {
            $('#propsearchfilter select').on('change', function() {
                $('#sort_by').attr('data-sort', 'y');
                $('.load-more').trigger('click');
            });
            $('#propsearchfilter input[type=checkbox]').on('click', function() {
                $('#sort_by').attr('data-sort', 'y');
                $('.load-more').trigger('click');
            });
        }

        if (typeof $('.projdt').html() != 'undefined') {
            var fullscreen = false;
            $(document).on('click', '.slider-inner .fs-icon', function() {
                if ($('#ninja-slider').hasClass('fullscreen')) {
                    $('.image-tab-wrapp, .img-prev-name').show();
                    fullscreen = true;
                    setTimeout(function() {
                        var gallery = $('.slider-inner ul li.ns-show').attr('data-gallery');
                        $('.image-tab-wrapp .image-tab-pan1 .tab').removeClass('active');
                        $('.image-tab-wrapp .image-tab-pan1 .tab[data-gallery="' + gallery + '"]').addClass('active');
                    }, 400);
                    selTabTotalCnt();
                } else {
                    $('.image-tab-wrapp, .img-prev-name').hide();
                    fullscreen = false;
                }
            });
            $(document).on('click', '.slider-inner div[id=ninja-slider-prev]', function() {
                if (fullscreen) {
                    setTimeout(function() {
                        var gallery = $('.slider-inner ul li.ns-show').attr('data-gallery');
                        $('.image-tab-wrapp .image-tab-pan1 .tab').removeClass('active');
                        $('.image-tab-wrapp .image-tab-pan1 .tab[data-gallery="' + gallery + '"]').addClass('active');
                    }, 400);
                    selTabTotalCnt();
                }
            });
            $(document).on('click', '.slider-inner div[id=ninja-slider-next]', function() {
                if (fullscreen) {
                    setTimeout(function() {
                        var gallery = $('.slider-inner ul li.ns-show').attr('data-gallery');
                        $('.image-tab-wrapp .image-tab-pan1 .tab').removeClass('active');
                        $('.image-tab-wrapp .image-tab-pan1 .tab[data-gallery="' + gallery + '"]').addClass('active');
                    }, 400);
                    selTabTotalCnt();
                }
            });
            $('.image-tab-wrapp .image-tab-pan1 .tab').on('click', function() {
                $('.image-tab-wrapp .image-tab-pan1 .tab').removeClass('active');
                $(this).addClass('active');
                var gallery = $(this).attr('data-gallery');
                $('#thumbnail-slider ul li').removeClass('active');
                $('#thumbnail-slider ul li[data-gallery="' + gallery + '"]:eq(0)').addClass('active').trigger('click');
                selTabTotalCnt();
            });
        }
        // ------------------ End Document ------------------ //
    });
})(this.jQuery);

function selTab(gallery) {
    $('.image-tab-wrapp .image-tab-pan1 .tab').removeClass('active');
    $('.image-tab-wrapp .image-tab-pan1 .tab[data-gallery="' + gallery + '"]').addClass('active');
    selTabTotalCnt();
}

function selTabTotalCnt() {
    setTimeout(function() {
        var ind = $('.slider-inner ul li.ns-show').index();
        $('.image-tab-wrapp .image-tab-pan2 span').html(++ind);
    }, 500);
}

function hidePopi(id) {
    $('#' + id).hide();
    $('.overlay, .review-error').hide();
}

function hidePopc(cls) {
    $('.' + cls).hide();
    $('.overlay, .review-error').hide();
}

function rmClassAll(cls) {
    $('.' + cls).removeClass(cls);
}

function reviewSubmit(form_id, hide_cls) {
    $('.review-error').hide();
    var error = false;
    if (typeof $('input[name=neighborhood_rate]:checked').val() == 'undefined' && typeof $('input[name=roads_rate]:checked').val() == 'undefined' && typeof $('input[name=safety_rate]:checked').val() == 'undefined' && typeof $('input[name=cleanliness_rate]:checked').val() == 'undefined' && typeof $('input[name=public_transport]:checked').val() == 'undefined' && typeof $('input[name=parking_rate]:checked').val() == 'undefined' && typeof $('input[name=connectivity_rate]:checked').val() == 'undefined' && typeof $('input[name=traffic_rate]:checked').val() == 'undefined' && typeof $('input[name=market_rate]:checked').val() == 'undefined' && typeof $('input[name=schools_rate]:checked').val() == 'undefined' && typeof $('input[name=restaurants_rate]:checked').val() == 'undefined' && typeof $('input[name=hospital_rate]:checked').val() == 'undefined') {
        $('#rating_error').html('Please provide atleast one rating').show();
        error = true;
    }
    if ($('#review_title').val().trim() == '') {
        $('#review_title_error').html('Please write a Title of your review').show();
        error = true;
    }
    if ($('#review_description').val().trim().length < 50) {
        $('#review_description_error').html('Please write a review of at least 50 characters').show();
        error = true;
    }
    if (error) {
        return false;
    }

    var form = new FormData($('#' + form_id)[0]);
    form.append('act', 'project');
    form.append('action', $('#' + form_id).attr('action'));
    $('#' + form_id + ' .alert').remove();
    $('.loading').show();
    $.ajax({
        url: site_url + 'common/reviewsubmit',
        type: 'post',
        dataType: 'json',
        data: form,
        contentType: false,
        processData: false,
        success: function(response) {
            $('.loading').hide();
            if (response.success) {
                $('#' + form_id)[0].reset();
                // $('.' + hide_cls).hide();
                $('.overlay').show();
                var html = '<div class="alert alert-success alert-dismissible fade show message-post" role="alert">' + response.message + '</div>';
                $('#' + form_id).prepend(html);
            } else {
                $('.overlay').show();
                var html = '<div class="alert alert-danger alert-dismissible fade show message-post" role="alert">' + response.message + '</div>';
                $('#' + form_id).prepend(html);
            }
        },
        error: function(err) {
            console.log('Error: ', err);
        }
    });
}

function viewReviews(page) {
    if ($('#reviewPopupSection .popup-data .proj-info__about__text').html() != '') {
        $('#reviewPopupSection .popup-data .proj-info__about__text').show();
        $('.overlay').show();
        $('#reviewPopupSection').addClass('open-state').show();
        $('#reviewPopupSection .pop-header').addClass('open-state');
        return false;
    }
    var form = new FormData();
    form.append('act', page);
    form.append('page', $(location).attr('pathname'));
    $('.loading').show();
    $.ajax({
        url: site_url + 'common/getreviews',
        type: 'post',
        dataType: 'json',
        data: form,
        contentType: false,
        processData: false,
        success: function(response) {
            $('.loading').hide();
            if (response.success) {
                $('#reviewPopupSection .popup-data .proj-info__about__text').html(response.data);
                $('.overlay').show();
                $('#reviewPopupSection').addClass('open-state').show();
                $('#reviewPopupSection .pop-header').addClass('open-state');
            }
        },
        error: function(err) {
            console.log('Error: ', err);
        }
    });
}

function loadReport(element_id) {
    $.ajax({
        url: site_url + 'common/getreports',
        type: 'get',
        dataType: 'json',
        success: function(response) {
            if (response.success) {
                $('#' + element_id).html(response.data);
            }
        },
        error: function(err) {
            console.log('Error: ', err);
        }
    });
}

function printPage() {
    window.print();
    return false;
}

function reportPage(page) {
    var form = new FormData($('#report_form')[0]);
    form.append('act', page);
    form.append('page', $(location).attr('pathname'));
    $('.loading').show();
    $('.alert').remove();
    $.ajax({
        url: site_url + 'common/postreports',
        type: 'post',
        dataType: 'json',
        data: form,
        contentType: false,
        processData: false,
        success: function(response) {
            $('.loading').hide();
            $('.modal').modal('hide');
            if (response.success) {
                var html = '<div class="alert alert-success alert-dismissible fade show message-post" role="alert">' + response.message + '</div>';
                $('.main-row').prepend(html);
            }
        },
        error: function(err) {
            console.log('Error: ', err);
        }
    });
    return false;
}

function redirectTo(url) {
    window.location.href = url;
}