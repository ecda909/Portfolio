const dict = {
    AWS: 'AWS',
    Database: 'Database',
    CICD: 'CICD',
    Languages: 'Languages',
    Linux: 'Linux',
    Networking: 'Networking'
}

function story() {
    $("#line-1").fadeIn("fast").delay(2000).fadeOut("fast")
    $("#line-2").delay(4000).fadeIn().delay(4000).fadeOut("fast")
    $("#line-3").delay(10000).fadeIn().delay(4000).fadeOut("fast")
    $("#line-4").delay(16000).fadeIn().delay(2000).fadeOut("fast")
    $("#sectionshow-1").delay(20000).fadeIn(function() {
        $("#hide-section-one").hide()
        $("#mainthing").show()
    })
    $("#navbar").delay(20000).fadeIn()
}

function displaymap() {
    $("#photo1").fadeOut("fast")
    $("#map").fadeIn("fast")
}

function displaySection(name) {
    if (name == 'AWS') {
        $('.skill-Set-List-Database').hide()
        $('.skill-Set-List-Languages').hide()
        $('.skill-Set-List-Linux').hide()
        $('.skill-Set-List-Networking').hide()
        $('.skill-Set-List-CICD').hide()
        $('.skill-Set-List-AWS').show()
    }
    if (name == 'Database') {
        $('.skill-Set-List-Languages').hide()
        $('.skill-Set-List-Linux').hide()
        $('.skill-Set-List-Networking').hide()
        $('.skill-Set-List-AWS').hide()
        $('.skill-Set-List-CICD').hide()
        $('.skill-Set-List-Database').show()
    }
    if (name == 'CICD') {
        $('.skill-Set-List-Database').hide()
        $('.skill-Set-List-Languages').hide()
        $('.skill-Set-List-Linux').hide()
        $('.skill-Set-List-Networking').hide()
        $('.skill-Set-List-AWS').hide()
        $('.skill-Set-List-CICD').show()
    }
    if (name == 'Languages') {
        $('.skill-Set-List-Database').hide()
        $('.skill-Set-List-AWS').hide()
        $('.skill-Set-List-Linux').hide()
        $('.skill-Set-List-Networking').hide()
        $('.skill-Set-List-CICD').hide()
        $('.skill-Set-List-Languages').show()
    }
    if (name == 'Linux') {
        $('.skill-Set-List-Database').hide()
        $('.skill-Set-List-Languages').hide()
        $('.skill-Set-List-Networking').hide()
        $('.skill-Set-List-AWS').hide()
        $('.skill-Set-List-CICD').hide()
        $('.skill-Set-List-Linux').show()
    }
    if (name == 'Networking') {
        $('.skill-Set-List-Database').hide()
        $('.skill-Set-List-Languages').hide()
        $('.skill-Set-List-Linux').hide()
        $('.skill-Set-List-AWS').hide()
        $('.skill-Set-List-CICD').hide()
        $('.skill-Set-List-Networking').show()
    }
}


$(window).on("load", function() {
    $(window)
        .scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight()
            $(".fade").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight()
                    /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) {
                    //object comes into view (scrolling down)
                    $(this).fadeTo(200, 1)
                }
            })
        })
        .scroll() //invoke scroll-handler on page-load
})