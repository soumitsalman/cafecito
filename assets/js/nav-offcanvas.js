(function () {
    const mobileNav = document.getElementById('mobile-nav');
    if (!mobileNav || typeof bootstrap === 'undefined' || !bootstrap.Offcanvas) {
        return;
    }

    mobileNav.querySelectorAll('.mobile-nav-body a[href]').forEach((link) => {
        link.addEventListener('click', () => {
            const drawer = bootstrap.Offcanvas.getInstance(mobileNav);
            if (drawer) {
                drawer.hide();
            }
        });
    });
}());
