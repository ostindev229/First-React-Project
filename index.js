let line1 = "https://training.zuri.team/";
let line2 = "https://books.zuri.team/";
let line3 = "https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E";
let line4 = "https://books.zuri.team/design-rules";


function LineCard(props) {
    return (<div className="dimension_card">
        <a  href={props.line}><span className = "textCenter">{props.title}</span></a>
    </div>);
}
const HeaderCard = (props) => {
    return (
        <div className="HeaderCard_space">
            <img className = "img_center" src ={props.picture} /><br/>
            <p className = "textProperties">Annette Black</p>
        </div>
    )
}
const SiteIcons = (props) => {
    return (
        <div className = "SiteIcons_space">
            <img src ={props.picture} ></img>
            <img src ={props.picture1} ></img>
        </div>
    )
}
const FooterCard = (props) => {
    return (
        <div className = "FooterCard_Space">
        <div className = "FooterCard_Content">
<div><img className = "img1_position" src= {props.icon}></img></div>
<div><img className = "img2_position" src= {props.icon1}></img></div>
<div><img className = "img3_position" src= {props.icon2}></img></div>
        </div>
        </div>
    )
}
  

function AllContent() {
    return (
        <div className = "container">
<HeaderCard picture = "profile__img.svg"> </HeaderCard>
<LineCard line = "#" title = "Twitter Link" />
<LineCard line = {line1} title = "Zuri Team" />
<LineCard line = {line2} title = "Zuri Books" />
<LineCard line = {line3} title = "Background check for coders" />
<LineCard line = {line4} title = "Design Books" />
<SiteIcons picture = "slack.svg" picture1 = "github.svg"></SiteIcons>
<FooterCard icon = "ZuriInternship.svg" icon1 = "Footer text.svg" icon2 = "I4G.svg"></FooterCard>


        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<AllContent />)