import React from "react";

export default function Details() {
  return (
    <div>
      <div className="aly-blacktop">
        <div>
          <img src="/airbnb-logo.png" width="100px" />
        </div>
        <div className="aly-format-header">
          <span>
            <img
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1683707-media_library/original/d3292e16-717f-4c7b-b2b4-c00661dabfab.jpeg?aki_policy=exp_md"
              width="300px"
            ></img>
          </span>
          <span className="aly-text">
            <p className="aly-online">Online Experience</p>
            <h1>Random Title</h1>
            <p>Somewhere, United States</p>
          </span>
        </div>
      </div>
      <div className="aly-wyd">
          <h1 className="aly-title">What you'll do</h1>
          <p className="aly-pgh">Sint dolor veniam eu in exercitation consequat deserunt veniam. Nisi sunt officia quis anim qui eu ullamco nostrud id minim incididunt. Eiusmod velit reprehenderit officia ad voluptate ad quis laboris eiusmod tempor ipsum deserunt ipsum laboris. Occaecat amet proident ipsum labore elit. Est laborum incididunt cillum et sunt dolor id anim dolor. Ad esse cupidatat officia labore. Fugiat officia ut occaecat officia anim amet duis labore dolor minim.</p>
      </div>
      <div className="aly-grey aly-wyd">
            <h1 className="aly-title">Try something new together</h1>
            <div className="aly-column aly-pgh">
                <img src="https://a0.muscache.com/pictures/2f1e240c-d383-45e4-b34b-8957d061cb32.jpg" height="40px"/>
                <p className="aly-bold">Thoughtful Hosts</p>
                <p>Get to know hosts who share their expertise and a window to their world.</p>
            </div>
            <div className="aly-column aly-pgh">
                <img src="https://a0.muscache.com/pictures/6ca44422-9ab4-42d0-94a1-73fff922164e.jpg" height="40px"/>
                <p className="aly-bold">Small group activities</p>
                <p>Meet people from all over the world while learning something new together.</p>
            </div>
            <div className="aly-column aly-pgh">
                <img src="https://a0.muscache.com/pictures/1ae9646f-4fdc-487a-a6f0-fea0a4a6cc44.jpg" height="40px"/>
                <p className="aly-bold">Simple and global</p>
                <p>Join easily and participate from home without a lot of prep.</p>
            </div>
      </div>
    </div>
  );
}
