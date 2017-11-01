const moduleName = {
        initialize() {
            console.log('pouet','it works !');
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
            this.isOpen = false;
        },

        open(e) {
            e.target.classList.add('post--zoomed');
            this.isOpen = true;

        }
}

module.exports = moduleName;
