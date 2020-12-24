import './slider.scss'

export class SliderCarusel {
    constructor(contentId, sliderId, slideItemClass) {
        this.countSlide = 4;
        this.padding = 30;
        this.curentSlide = 0;
        this.slideMinWidth = 230;
        this.slideMaxWidth = 380;
        this.content = document.getElementById(contentId);
        this.slider = document.getElementById(sliderId);
        this.slideAll = document.getElementsByClassName(slideItemClass);
        this.arraySlide = [...this.slideAll];
        this.x = 0;
        this.itemWidth = (this.content.clientWidth - (this.padding * this.countSlide)) / this.countSlide;
        this.itemWidthFull = this.content.clientWidth / this.countSlide;

        this.prevBtn = document.createElement("div");
        this.nextBtn = document.createElement("div");
        this.prevBtn.id = "js-btnPrev";
        this.nextBtn.id = "js-btnNext";
        this.prevBtn.className = "prev-btn";
        this.nextBtn.className = "next-btn";
        this.slider.appendChild(this.prevBtn);
        this.slider.appendChild(this.nextBtn);

        this.arraySlide.map((item, index) => {
            item.style.paddingLeft = this.padding/2 + 'px';
            item.style.paddingRight = this.padding/2 + 'px';
            item.firstChild.style.width = this.itemWidth + 'px';
        });

        this.prevBtn.addEventListener('click', this.slidePrev);
        this.nextBtn.addEventListener('click', this.slideNext);
        window.addEventListener('resize', this.updateSize);
    }


    slidePrev = () => {
        if(this.curentSlide > 0) {
            this.curentSlide -= 1;
            this.x += this.itemWidthFull;
            this.content.style.transform = 'translateX('+ this.x +'px)';
        }
    };

    slideNext = () => {
        if(this.curentSlide + this.countSlide < this.slideAll.length) {
            this.curentSlide += 1;
            this.x -= this.itemWidthFull;
            this.content.style.transform = 'translateX('+ this.x +'px)';
        }
    };

    updateSize = () => {
        if (this.itemWidth <= this.slideMinWidth) {
            --this.countSlide
        } else if (this.itemWidth >= this.slideMaxWidth && this.countSlide > 1) {
            ++this.countSlide;
        }


        this.arraySlide = [...this.slideAll];
        this.itemWidth = (this.content.clientWidth - (this.padding * this.countSlide)) / this.countSlide;
        this.itemWidthFull = this.content.clientWidth / this.countSlide;
        this.arraySlide.map((item, index) => {
            item.style.paddingLeft = this.padding/2 + 'px';
            item.style.paddingRight = this.padding/2 + 'px';
            item.firstChild.style.width = this.itemWidth + 'px';
        });
    };



}