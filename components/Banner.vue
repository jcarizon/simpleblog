<template>
    <div class="_banner">
        <div class="_big_wrap">
            <div class="_carousel">
                <div class="carousel_items" :class="direction">
                    <template v-for="(post, index) in items">
                            <div :class="['_row-center items_container', {active: divActive == index}]"  :key="index">
                                <figure class="_col _item">
                                    <img :src="post.img" :alt="post.title">
                                    <div class="_wrapper">
                                        <div class="txt-right _banner-content">
                                            <p class="jp-font text_content" v-html="post.title"></p>
                                            <span class="is-block date">{{ post.date }}</span>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                    </template>
                </div>
                <div class="dotted_buttons" v-if="items.length != 1">
                    <a 	href="javascript:;" 
                        v-for="(button, index) in items" 
                        :key="index" 
                        :class="[ (index == divActive ? 'active' : ''), disable == true ? 'disabled' : '' ]"
                        @click="moveCarouselDot(index)"></a>
                </div>
                <div class="move">
                    <a href="javascript:;" :class="['prev', {disabled: divActive == 0}]" @click="move('prev')"></a>
                    <a href="javascript:;" :class="['next', {disabled: divActive == (items.length - 1)}]" @click="move('next')"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import '~/assets/scss/banner.scss';
</style>

<script>
let active;
export default {
    data() {
        return {
            items: [
                {
                    title : `<span>サンプルテキスト</span> <br/><span>サンプル ルテキスト</span> <br/><span>サンプルテキスト</span>`,
                    img   : require('../assets/images/banner/banner1.png'),
                    date  : '2019.06.19'
                },
                {  
                    title : `<span>サンプルテキスト</span> <br/><span>サンプル ルテキスト</span> <br/><span>サンプルテキスト</span>`,
                    img   : require('../assets/images/banner/banner1.png'),
                    date  : '2019.06.19'
                },
                {  
                    title : `<span>サンプルテキスト</span> <br/><span>サンプル ルテキスト</span> <br/><span>サンプルテキスト</span>`,
                    img   : require('../assets/images/banner/banner1.png'),
                    date  : '2019.06.19'
                }
            ],
            divActive: 0,
            direction: null,
			disable: false,
        }
    },
    methods: {
        move(i) {
            this.direction = i
            i == 'next' ? this.divActive = this.divActive+1 : this.divActive = this.divActive-1
        },
		moveCarouselDot(index) {
            active = this.divActive

			setTimeout(() => {
			    this.divActive = index

                active < index ? this.direction = 'next' : this.direction = 'prev'

                active = this.divActive;
			}, 100)
		}
    },
}
</script>