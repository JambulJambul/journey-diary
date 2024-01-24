import classes from './style.module.scss'
import testImg from '../../static/images/bali.png'
import bookmarkImg from '../../static/images/bookmark.svg'

const ContentCard = () => {
    return (
        <>
            <div className={classes["card-container"]}>
                <img src={testImg} height={180} alt="" />
                <button className={classes["bookmark-button"]}>
                    <img src={bookmarkImg} alt="" />
                </button>
                <div className={classes["card-content"]}>
                    <h3>test</h3>
                    <p className={classes['text-light-gray']}>29 July 2020, Cipto</p>
                    <div className={classes["desc-wrapper"]}>
                        <p className={classes['text-gray']}>Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali. fasfjaosifjsaiofajsfoisafjoas  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentCard