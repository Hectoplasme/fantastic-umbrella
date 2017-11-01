const carouselZoom = {
    initialize() {
        this.bindUI();
        this.setProperties();
        this.bindEvents();
    },

    bindUI() {
        this.ui = {};

        this.ui.posts = document.querySelectorAll('.js-post-gallery');
        this.ui.buttons = document.querySelectorAll('.js-post-gallery .js-post-carousel-btn');
    },

    setProperties() {
        this.isOpen = false;
    },

    bindEvents() {
        this.ui.buttons.forEach((el,i) => {
            this.currentCarousel = this.ui.posts[i];
            el.addEventListener('click', this.onClick.bind(this));
        });
    },

    onClick(e) {
        //console.log(e.target.classList.contains('slide-slide'))
        if (this.isOpen && e.target.classList.contains('slick-slide')) {
            this.close();
        } else if (!this.isOpen){
            this.open(e);
        }
    },

    close() {
        $('.post--zoomed .js-post-carousel').slick('unslick');
        document.querySelector('.post--zoomed').classList.remove('post--zoomed');
        document.body.classList.remove('overflow');
        this.isOpen = false;
    },

    open(e) {
        this.currentCarousel.querySelector('.js-post-carousel-btn').classList.add('post--zoomed');
        this.isOpen = true;
        document.body.classList.add('overflow');

        $('.post--zoomed .js-post-carousel').slick({
            infinite: false,
            centerMode: true
        });

    }
}

module.exports = carouselZoom;
