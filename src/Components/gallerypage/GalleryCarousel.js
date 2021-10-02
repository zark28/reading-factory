import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line
export default () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval="5000"
    width="100%"
    stopOnHover
    className="flex flex-col my-8 align-center justify-center"
  >
    <div>
      <img alt="" src="./img/bg1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="./img/bg2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="./img/bg3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="./img/bg4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="./img/bg5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src="./img/bg6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img alt="" src="./img/bg7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img alt="" src="./img/bg6.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" src="./img/bg5.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src="./img/bg2.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" src="./img/bg1.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" src="./img/bg2.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" src="./img/bg3.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src="./img/bg4.jpg" />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
);
