import ImgShow from './ImgShow';
import './imglist.css';
function ImgList({images}){
    const renderdImages = images.map((image)=>{
        return<ImgShow key={image.id} image={image} />
    })
    return <div className="img-list"> {renderdImages}   </div>;

}
export default ImgList
// 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y

