import React from 'react';
import newsimage from '../assets/images/news/thumbnail.png';

const Banner = () => {
    return (
        <section class="_news_section">
            <div class="_wrapper">
                <h1 class="news_title">NEWS</h1>
            </div>
            <div class="_big_wrap">
                <div class="_row-itemcr _list">
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                    <figure class="_col-ungrow _tile">
                        <a href="/" class=""></a> <img src={ newsimage } alt="サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ" /> 
                        <figcaption>
                        <span class="date">2019.06.19</span> 
                        <h4 class="jp-font">サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキ</h4>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <button class="button news_load">LOAD MORE</button>
            </section>
    )
}

export default Banner;