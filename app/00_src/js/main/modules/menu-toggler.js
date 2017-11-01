const menuToggler = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.header = document.querySelector('.js-header');
            this.ui.menu = this.ui.header.querySelector('.js-menu');
            this.ui.menuToggler = this.ui.header.querySelector('.js-menu-btn');
            this.ui.pages = this.ui.header.querySelectorAll('.js-page');
            this.ui.links = this.ui.header.querySelectorAll('.js-links .menu-item-object-page a');
        },

        setProperties() {
            this.isMenuOpen = false;
            this.isPageOpen = false;
            this.currentPage;
            this.target;
            this.currentLink;
        },

        bindEvents() {
            this.ui.menuToggler.addEventListener('click', this.toggleMenu.bind(this));
            this.ui.links.forEach((el,i) => {
                el.addEventListener('click', this.togglePages.bind(this));
            })
        },

        togglePages(e) {
            e.preventDefault();

            if (!this.isPageOpen) {
                this.target = e.target.href;
                this.openPage(this.target, e);

            } else if (this.target !== e.target.href) {
                this.closePage(this.target);
                this.target = e.target.href;

                setTimeout(() => {
                    this.openPage(this.target, e);
                }, 500);
            } else {
                this.closePage(this.target);

            }
        },

        openPage(href, e) {
            this.isPageOpen = true;
            this.currentLink = e.target;
            this.currentPage = document.querySelector('.js-page[data-href="' + href + '"]');
            this.currentLink.classList.add('is-open');
            this.currentPage.classList.add('is-open');
            this.ui.menuToggler.classList.add('is-hidden');
        },

        closePage(href) {
            this.isPageOpen = false;
            this.currentPage = document.querySelector('.js-page[data-href="' + href + '"]');
            this.currentLink.classList.remove('is-open');
            this.currentPage.classList.remove('is-open');
            this.ui.menuToggler.classList.remove('is-hidden');
        },

        toggleMenu(e) {
            if (this.isMenuOpen) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        },

        openMenu() {
            this.isMenuOpen = true;
            this.ui.menu.classList.add('is-open');
            this.ui.menuToggler.classList.add('is-open');
            this.ui.links.forEach((el,i) => {
                el.classList.add('is-hidden');
            })

            // setTimeout(() => {
            //     this.ui.menuToggler.innerHTML = "close";
            // }, 600);
        },

        closeMenu() {
            this.isMenuOpen = false;
            this.ui.menu.classList.remove('is-open');
            this.ui.menuToggler.classList.remove('is-open');
            this.ui.links.forEach((el,i) => {
                el.classList.remove('is-hidden');
            })

            // setTimeout(() => {
            //     this.ui.menuToggler.innerHTML = "menu";
            // }, 200);
        }
}

module.exports = menuToggler;
