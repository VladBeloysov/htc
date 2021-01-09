import './slider.scss'

export class SliderCarusel {
    constructor(contentId, sliderId, slideItemClass) {
        this.padding = 30;
        this.curentSlide = 0;
        this.content = document.getElementById(contentId);
        this.slider = document.getElementById(sliderId);
        this.slideAll = document.getElementsByClassName(slideItemClass);
        this.arraySlide = [...this.slideAll];
        this.updateCountSlide(this.content.clientWidth);
        this.x = 0;
        this.itemWidth = (this.content.clientWidth - (this.padding * this.countSlide)) / this.countSlide;
        this.itemWidthFull = this.content.clientWidth / this.countSlide;

        this.arraySlide.map((item, index) => {
            item.style.paddingLeft = this.padding/2 + 'px';
            item.style.paddingRight = this.padding/2 + 'px';
            item.firstChild.style.width = this.itemWidth + 'px';
        });

        this.createBtn();
        this.updateBtn();

        this.prevBtn.addEventListener('click', this.slidePrev);
        this.nextBtn.addEventListener('click', this.slideNext);

        window.addEventListener('resize', this.updateSize);
    }

    createBtn = () => {
        this.prevBtn = document.createElement("div");
        this.nextBtn = document.createElement("div");
        this.prevBtn.id = "js-btnPrev";
        this.nextBtn.id = "js-btnNext";
        this.prevBtn.className = "prev-btn";
        this.nextBtn.className = "next-btn";
    };

    updateBtn = () => {
        if ((this.curentSlide + this.countSlide) < this.arraySlide.length) {
            this.slider.appendChild(this.nextBtn);
        } else {
            this.nextBtn.remove();
        }

        if (this.curentSlide > 0) {
            this.slider.appendChild(this.prevBtn);
        } else {
            this.prevBtn.remove();
        }
    };

    updateCountSlide = (clientWidth) => {
        switch (true) {
            case (450 > clientWidth):
                this.countSlide = 1;
                break;
            case (700 > clientWidth):
                this.countSlide = 2;
                break;
            case (1000 > clientWidth):
                this.countSlide = 3;
                break;
            default:
                this.countSlide = 4;
                break;
        }
    };

    slidePrev = () => {
        if(this.curentSlide > 0) {
            this.curentSlide -= 1;
            this.x += this.itemWidthFull;
            this.content.style.transform = 'translateX('+ this.x +'px)';
        }
        this.updateBtn();
    };

    slideNext = () => {
        if(this.curentSlide + this.countSlide < this.slideAll.length) {
            this.curentSlide += 1;
            this.x -= this.itemWidthFull;
            this.content.style.transform = 'translateX('+ this.x +'px)';
        }
        this.updateBtn();
    };

    updateSize = () => {
        this.curentSlide = 0;
        this.x = 0;
        this.content.style.transform = 'translateX('+ this.x +'px)';
        this.arraySlide = [...this.slideAll];
        this.updateCountSlide(this.content.clientWidth);
        this.itemWidth = (this.content.clientWidth - (this.padding * this.countSlide)) / this.countSlide;
        this.itemWidthFull = this.content.clientWidth / this.countSlide;
        this.arraySlide.map((item, index) => {
            item.style.paddingLeft = this.padding/2 + 'px';
            item.style.paddingRight = this.padding/2 + 'px';
            item.firstChild.style.width = this.itemWidth + 'px';
        });
        this.updateBtn();
    };



}