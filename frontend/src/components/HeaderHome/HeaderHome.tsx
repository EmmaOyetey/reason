import "./HeaderHome.scss";

type HeaderHomeProps = {
  image: string;
  date: string;

}

const HeaderHome = ({image, date }: HeaderHomeProps) => {
  return (
    <div className="header-home">
      <p className="header-home__info">{date}</p>
      <div className="header-home__div">
      </div>
    </div>
  )
}


export default HeaderHome;