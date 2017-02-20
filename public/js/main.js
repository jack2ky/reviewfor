$(function() {
    FastClick.attach(document.body);

    $('.multi-selector.overall button').click(function(event) {
        var $this = $(this);
        var $textDiv = $(".filter-selection .text-primary:eq(0)");
        var $preTextDiv = $(".filter-selection span:eq(1)");
        $this.toggleClass("active");

        if ($this.hasClass("active")) {
            $textDiv.text($this.text() + ", " + $textDiv.text());
            $preTextDiv.text("Filtered by ");
        } else {
            $textDiv.text($textDiv.text().replace($this.text() + ", ", ""));
            if ($textDiv.text() === "") {
                $preTextDiv.text("");
            }
        }
    });

    $('.multi-selector.sort button').click(function(event) {
        var $this = $(this);
        var $textDiv = $(".filter-selection .text-primary:eq(1)");
        var $preTextDiv = $(".filter-selection span:eq(3)");
        $this.toggleClass("active").siblings().removeClass('active');

        if ($this.hasClass("active")) {
            $textDiv.text($this.text());
            $preTextDiv.text(" Sorted ");
        } else {
            $textDiv.text("");
            $preTextDiv.text("");
        }
    });

    $("#newRate").rateYo({
        starWidth: "35px",
        normalFill: "#bbb",
        ratedFill: "#26c6da",
    }).on("rateyo.set", function(e, data) {
        alert("The rating is set to " + data.rating + "!");
    });

    $(".review .stars").each(function (idx, ele) {
        var rate = $(ele).data("rate");
        $(ele).rateYo({
            starWidth: "20px",
            normalFill: "#bbb",
            ratedFill: "#26c6da",
            rating: +rate,
            readOnly: true
        });
    })

    $(".review .content").each(function(idx, ele) {
        var text = $(ele).text();
        if (text.length > 180) {
            $(ele).html('<input type="checkbox" class="read-more-state" />' +
                         '<p class="read-more-wrap">' + text.substr(0, 180) +
                         '<span class="read-more-target">' + text.substr(180) +
                         '</span></p><label class="read-more-trigger text-info"></label>')
        }
    });

    $(".review .reply .content").each(function(idx, ele) {
        var text = $(ele).text();
        if (text.length > 180) {
            $(ele).html('<input type="checkbox" class="read-more-state" />' +
                         '<p class="read-more-wrap">' + text.substr(0, 180) +
                         '<span class="read-more-target">' + text.substr(180) +
                         '</span></p><label class="read-more-trigger text-info"></label>')
        }
    });

    $(".review .vote .btn").click(function(event) {

        const typeClicked = $(this).attr("data-type");
        $this = $(this);
        if (!$this.data("hasVote")) {
            var $tooltip = $this.next('.tooltip');
            var number = +$tooltip.text();
            $tooltip.text(number += 1);
            $this.data("hasVote", true);
        }
        // When not-useful button is onclick,
        // if useful btn has clicked,
        // the number of useful vote should minus one.
        var $otherBtn = $this.siblings('.btn');
        if ($otherBtn.data("hasVote")) {
            $otherBtn.data("hasVote", "");
            var $tooltip = $otherBtn.next('.tooltip');
            var number = +$tooltip.text();
            $tooltip.text(number -= 1);
        }
        $.ajax({
            method : "POST",
            contentType : "application/json",
            url : "/usefulHandler",
            data : JSON.stringify({type : typeClicked }),
            success : function(data){
                console.log("Success");
                console.log(data)
            }

        })
    });

    $(".btn-reply").click(function(event) {
        $this = $(this);
        $this.find('i').toggleClass('fa-sort-down fa-sort-up');
        $this.parent().next('.replies').toggleClass('active');
    });

    $(".read-more-trigger").click(function(event) {
        $this = $(this);
        $checkbox = $this.siblings(".read-more-state");
        $checkbox.prop("checked", !$checkbox.prop("checked"));
    });



    // crate the overall stars shape in left side bar.
    $("#overall-stars").rateYo({
        starWidth: "30px",
        normalFill: "#bbb",
        ratedFill: "#26c6da",
        rating: scores.overall,
        readOnly: true
    });

    $("#overall-stars").next('.score').text(scores.overall);

    function createChartsInLeftSideBar() {
            if (typeof scores.overview !== 'undefined') {
                mychart.overall("chart-overall", scores.overview, function() {});
            } else {
                mychart.overall("chart-overall", [], function() {});
            }
            if (typeof scores["phone support"] !== 'undefined') {
                mychart.specific("chart-phone", (scores["phone support"].average), function() {
                    $("#chart-phone").parent().addClass('hasChart');
                    $(".specific .title").addClass("animated flash animation-delayed")
                });
            } else {
                $("#chart-phone").html('<div class="circle"><div class="pie_right"></div><div class="mask">--</div></div>');
            }
            if (typeof scores.website !== 'undefined') {
                mychart.specific("chart-website", (scores.website.average), function() {
                    $("#chart-website").parent().addClass('hasChart');
                    $(".specific .title").addClass("animated flash animation-delayed");
                });
            } else {
                $("#chart-website").html('<div class="circle"><div class="pie_right"></div><div class="mask">--</div></div>');
            }
            if (typeof scores.representative !== 'undefined') {
                mychart.specific("chart-representative", (scores.representative.average), function() {
                    $("#chart-representative").parent().addClass('hasChart');
                    $(".specific .title").addClass("animated flash animation-delayed")
                });
            } else {
                $("#chart-representative").html('<div class="circle"><div class="pie_right"></div><div class="mask">--</div></div>');
            }
            if (typeof scores.shipping !== 'undefined') {
                mychart.specific("chart-shipping", (scores.shipping.average), function() {
                    $("#chart-shipping").parent().addClass('hasChart');
                    $(".specific .title").addClass("animated flash animation-delayed");
                });
            } else {
                $("#chart-shipping").html('<div class="circle"><div class="pie_right"></div><div class="mask">--</div></div>');
            }
            if (typeof scores["conflict resolution"] !== 'undefined') {
                mychart.specific("chart-conflictResolution", (scores["conflict resolution"].average), function() {
                    $("#chart-conflictResolution").parent().addClass('hasChart');
                    $(".specific .title").addClass("animated flash animation-delayed")
                });
            } else {
                $("#chart-conflictResolution").html('<div class="circle"><div class="pie_right"></div><div class="mask">--</div></div>');
            }


            $('.specific.hasChart').click(function(event) {
                $this = $(this);
                var name = $this.find(".title span:nth-of-type(2)").text();
                appendSubs(scores[name.toLowerCase()].detail);
            });

            $('#tagcloud').jQCloud(scores.tags, {
                shape: 'rectangular',
                autoResize: true,
                fontSize: {
                    from: 0.1,
                    to: 0.02
                }
            });
    }



    setTimeout(function() {
        // ajaxLoadScores({'fakeCompany': '1234'})
        createChartsInLeftSideBar();
    }, 500);

    function appendSubs(data) {
        $(".specifics .detail").html('<div class="triangle animated fadeInDown"><div class="shape"></div></div><div class="close-icon"><span><i class="fa fa-close"></i></span><span>close</span></div><div id="chart-detail"></div>');
        mychart.detail("chart-detail", data, function() {});
        $("#chart-detail").addClass("animated fadeInDown")
        if (!$("#chart-detail").visible()) {
            $("html, body").animate({ scrollTop: $("#chart-detail").offset().top - 120}, 1000, 'swing');
        }
        // var bgColor = ['bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-useful', 'bg-info'];
        // data[0][specific.toLowerCase()].sub.forEach(function(val, i) {
        //     var number = Math.round((+val.value) / 5 * 100);
        //     var html = new EJS({ url: './ejs/progressbar.ejs' }).render({ newNumber: number, newLabel: val.name, color: bgColor[i] });
        //     $(".specifics .detail").append(html);
        // });
    }

    $('.detail').delegate('.close-icon', 'click', function() {
        $('.detail').empty();
    });

    // image zooming
    var customZooming = new Zooming({
        enableGrab: false,
        preloadImage: true,
        customSize: { width: 400, height: 300 }
    })
    customZooming.listen('.review .images img');
});
