document.addEventListener('DOMContentLoaded', function () {

    // Back to top button
    var btnToTop = document.getElementById('btnToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnToTop.classList.add('visible');
        } else {
            btnToTop.classList.remove('visible');
        }
    });
    btnToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Chatbox toggle
    var btnChatbox = document.getElementById('btnChatbox');
    var chatboxForm = document.getElementById('chatboxForm');
    btnChatbox.addEventListener('click', function () {
        btnChatbox.classList.toggle('active');
        chatboxForm.classList.toggle('active');
    });

    // Mobile nav toggle
    var headerBar = document.querySelector('.header-bar');
    var navMobile = document.querySelector('.nav-mobile');
    if (headerBar && navMobile) {
        headerBar.addEventListener('click', function () {
            navMobile.classList.toggle('active');
        });
    }

    // Mobile submenu toggle
    var submenuTriggers = document.querySelectorAll('.nav-mobile .menu-item-has-children > a');
    submenuTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            var submenuId = this.parentElement.getAttribute('data-submenu');
            var submenu = document.querySelector('.nav-submenu[data-submenu="' + submenuId + '"]');
            if (submenu) {
                submenu.classList.toggle('hidden');
                submenu.classList.toggle('active');
            }
        });
    });

    // Mobile nav back button
    var navBacks = document.querySelectorAll('.nav-back');
    navBacks.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var submenu = this.closest('.nav-submenu');
            if (submenu) {
                submenu.classList.add('hidden');
                submenu.classList.remove('active');
            }
        });
    });

    // Search form overlay
    var searchBtn = document.querySelector('.header-search button');
    var searchForm = document.querySelector('.header-search-form');
    if (searchBtn && searchForm) {
        searchBtn.addEventListener('click', function () {
            searchForm.classList.toggle('active');
        });
    }

    // Contact form validation & submission
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var fullName = contactForm.fullName.value.trim();
            var email = contactForm.email.value.trim();
            var phone = contactForm.phone.value.trim();
            var note = contactForm.note.value.trim();
            var banner = document.getElementById('form-banner');

            if (!fullName || !email || !phone) {
                banner.innerHTML = '<div style="background:#e74c3c;color:#fff;padding:12px 20px;border-radius:6px;margin-top:15px;font-weight:600;text-align:center">Vui lòng điền đầy đủ thông tin bắt buộc.</div>';
                return;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                banner.innerHTML = '<div style="background:#e74c3c;color:#fff;padding:12px 20px;border-radius:6px;margin-top:15px;font-weight:600;text-align:center">Email không hợp lệ.</div>';
                return;
            }

            var phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                banner.innerHTML = '<div style="background:#e74c3c;color:#fff;padding:12px 20px;border-radius:6px;margin-top:15px;font-weight:600;text-align:center">Số điện thoại phải có 10 số.</div>';
                return;
            }

            banner.innerHTML = '<div style="background:#27ae60;color:#fff;padding:12px 20px;border-radius:6px;margin-top:15px;font-weight:600;text-align:center">Gửi thông tin thành công!</div>';
            contactForm.reset();
        });
    }
});
