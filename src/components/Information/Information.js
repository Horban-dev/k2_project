import React from 'react';
import info from './Information.module.css'
const Information = () => {
    return (
        <div className={info.container}>
            <div className={info.img} data-background="https://k2.moncler.com/wp-content/uploads/2014/10/montagna.jpg"></div>
            <div className={info.bigText}>
                <div className={info.title}>
                    <h3>THE CONQUEST OF K2</h3>
                    <span>1954</span>
                </div>
                <div className={info.divider}/>
                <p className={info.text}>
                It takes strong arms to climb a mountain. It takes perseverance and good lungs. But without desire, they are worth nothing, because dreaming of a mountain is as important as climbing it. As the mountaineer once said to an old guide “You lead the body where the eyes once looked”. And nobody has looked as far as Lino Lacedelli and Achille Compagnoni did in 1954, when they decided to climb K2, the world’s second-highest mountain, at 8,611 metres. For this feat verging on the impossible, the team was kitted out with Moncler down jackets, taken to a high standard of specialisation by Lionel Terray, the French mountaineer who has been a key figure in the brand’s history. Sixty years after, the feat has been repeated: Italy and Pakistan are together once again, with Moncler, on K2.
                </p>
                <div className={info.divider}/>
            </div>
        </div>
    );
};

export default Information;