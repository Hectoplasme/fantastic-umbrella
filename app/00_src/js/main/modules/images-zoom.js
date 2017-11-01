const imgZoom = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.posts = document.querySelectorAll('.js-post-photo');
            this.ui.photos = document.querySelectorAll('.js-post-photo .js-post-thumbnail');
        },

        setProperties() {
            this.isOpen = false;
        },

        bindEvents() {
            this.ui.photos.forEach((el,i) => {
                el.addEventListener('click', this.onClick.bind(this));
            });
        },

        onClick(e) {
            if (this.isOpen) {
                this.close();
            } else {
                this.open(e);
            }
        },

        close() {
            document.querySelector('.post--zoomed').classList.remove('post--zoomed');
            document.body.classList.remove('overflow');
            this.isOpen = false;
        },

        open(e) {
            e.target.classList.add('post--zoomed');
            document.body.classList.add('overflow');
            this.isOpen = true;

        }
}

module.exports = imgZoom;
