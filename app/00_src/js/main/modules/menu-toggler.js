const menuToggler = {
        initialize() {
            console.log('pouet','it works !');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.header = document.querySelector('.js-header');
            this.ui.menuToggler = this.ui.header.querySelector('.js-menu-btn');
        },

        setProperties() {
            this.isMenuOpen = false;
        },

        bindEvents() {
            //Example
            this.ui.menuToggler.addEventListener('click', this.onClick.bind(this));
        },

        onClick(e) {
            if (this.isMenuOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        open() {
            this.isMenuOpen = true;
            this.ui.header.classList.add('header-menu-open');

            setTimeout(() => {
                this.ui.menuToggler.innerHTML = "close";
            }, 600);
        },

        close() {
            this.isMenuOpen = false;
            this.ui.header.classList.remove('header-menu-open');

            setTimeout(() => {
                this.ui.menuToggler.innerHTML = "menu";
            }, 200);
        }
}

module.exports = menuToggler;
