import React from "react";

function Settings() {
  return (
    <div className="row">
      <div className="col-12 col-lg-7 col-xl-8">
        <div className="nav-tabs-custom">
          <ul className="nav nav-tabs">
            <li>
              <a href="#usertimeline" data-toggle="tab">
                Timeline
              </a>
            </li>
            <li>
              <a className="active" href="#activity" data-toggle="tab">
                Activity
              </a>
            </li>
            <li>
              <a href="#settings" data-toggle="tab">
                Settings
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane" id="usertimeline">
              <div className="publisher publisher-multi bg-white b-1 mb-30">
                <textarea
                  className="publisher-input auto-expand"
                  rows={4}
                  placeholder="Write something"
                ></textarea>
                <div className="flexbox">
                  <div className="gap-items">
                    <span className="publisher-btn file-group">
                      <i className="fa fa-image file-browser"></i>
                      <input type="file" />
                    </span>
                    <a className="publisher-btn" href="#">
                      <i className="fa fa-map-marker"></i>
                    </a>
                    <a className="publisher-btn" href="#">
                      <i className="fa fa-smile-o"></i>
                    </a>
                  </div>

                  <button className="btn btn-sm btn-bold btn-primary">
                    Post
                  </button>
                </div>
              </div>

              <div className="box">
                <div className="media bb-1 border-fade">
                  <img
                    className="avatar avatar-lg"
                    src="../images/avatar/3.jpg"
                    alt="..."
                  />
                  <div className="media-body">
                    <p>
                      <strong>Denial Webar</strong>
                      <time className="float-right text-fade" dateTime="2017">
                        24 min ago
                      </time>
                    </p>
                    <p>
                      <small>Designer</small>
                    </p>
                  </div>
                </div>

                <div className="box-body bb-1 border-fade">
                  <p className="lead">
                    Authoritatively syndicate goal-oriented leadership skills
                    for clicks-and-mortar outsourcing. Synergistically
                    reconceptualize enabled catalysts for change.
                  </p>

                  <div className="gap-items-4 mt-10">
                    <a className="text-fade hover-light" href="#">
                      <i className="fa fa-thumbs-up mr-1"></i> 1254
                    </a>
                    <a className="text-fade hover-light" href="#">
                      <i className="fa fa-comment mr-1"></i> 25
                    </a>
                    <a className="text-fade hover-light" href="#">
                      <i className="fa fa-share-alt mr-1"></i> 12
                    </a>
                  </div>
                </div>

                <div className="media-list media-list-divided bg-lighter">
                  <div className="media">
                    <a className="avatar" href="#">
                      <img src="../images/avatar/6.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p>
                        <a href="#">
                          <strong>Rock Tele</strong>
                        </a>
                        <time
                          className="float-right text-fade"
                          dateTime="2017-07-14 20:00"
                        >
                          Just now
                        </time>
                      </p>
                      <p>
                        Uniquely enhance world-className channels with just in
                        time schemas.
                      </p>

                      <div className="media px-0 mt-20">
                        <a className="avatar" href="#">
                          <img src="../images/avatar/8.jpg" alt="..." />
                        </a>
                        <div className="media-body">
                          <p>
                            <a href="#">
                              <strong>Brock Lensar</strong>
                            </a>
                            <time
                              className="float-right text-fade"
                              dateTime="2017-07-14 20:00"
                            >
                              26 mins ago
                            </time>
                          </p>
                          <p>Thank you for your nice comment.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="media">
                    <a className="avatar" href="#">
                      <img src="../images/avatar/9.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p>
                        <a href="#">
                          <strong>Tony Stark</strong>
                        </a>
                        <time
                          className="float-right text-fade"
                          dateTime="2017-07-14 20:00"
                        >
                          2 hours ago
                        </time>
                      </p>
                      <p>
                        Continually drive user friendly solutions through
                        performance based infomediaries.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="publisher bt-1 border-fade">
                  <img
                    className="avatar avatar-sm"
                    src="../images/avatar/4.jpg"
                    alt="..."
                  />
                  <input
                    className="publisher-input"
                    type="text"
                    placeholder="Add Your Comment"
                  />
                  <a className="publisher-btn" href="#">
                    <i className="fa fa-smile-o"></i>
                  </a>
                  <span className="publisher-btn file-group">
                    <i className="fa fa-camera file-browser"></i>
                    <input type="file" />
                  </span>
                </form>
              </div>

              <div className="box p-15">
                <div className="timeline timeline-single-column timeline-single-full-column">
                  <span className="timeline-label">
                    <span className="badge badge-info badge-pill">Images</span>
                  </span>

                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-success">
                      <i className="fa fa-image"></i>
                    </div>
                    <div className="timeline-event">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          <a href="#">Rakesh Kumar</a>
                          <small> uploaded new photos</small>
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <img
                          src="../images/150x100.png"
                          alt="..."
                          className="m-10"
                        />
                        <img
                          src="../images/150x100.png"
                          alt="..."
                          className="m-10"
                        />
                        <img
                          src="../images/150x100.png"
                          alt="..."
                          className="m-10"
                        />
                        <img
                          src="../images/150x100.png"
                          alt="..."
                          className="m-10"
                        />
                      </div>
                      <div className="timeline-footer">
                        <p className="text-right">
                          <i className="fa fa-clock-o"></i> 8 days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-info">
                      <i className="ion ion-chatbubble-working"></i>
                    </div>
                    <div className="timeline-event">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          <a href="#">Jone Doe</a>
                          <small> commented on your post</small>
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Repellendus numquam facilis enim eaque, tenetur
                          nam id qui vel velit similique nihil iure molestias
                          aliquam, voluptatem totam quaerat, magni commodi
                          quisquam.
                        </p>
                      </div>
                      <div className="timeline-footer">
                        <a className="btn btn-success btn-sm" href="#">
                          View comment
                        </a>
                        <p className="pull-right">
                          <i className="fa fa-clock-o"></i> 8 days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-point timeline-point-danger">
                      <i className="ion ion-ios-videocam"></i>
                    </div>
                    <div className="timeline-event">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">
                          <a href="#">Jone Doe</a>
                          <small> shared a video</small>
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe
                            width="854"
                            height="480"
                            src="https://www.youtube.com/embed/k85mRPqvMbE"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="timeline-footer">
                        <a className="btn btn-success btn-sm" href="#">
                          View comment
                        </a>
                        <p className="pull-right">
                          <i className="fa fa-clock-o"></i> 8 days ago
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="timeline-label">
                    <button className="btn btn-danger">
                      <i className="fa fa-clock-o"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <div className="active tab-pane" id="activity">
              <div className="box p-15">
                <div className="post">
                  <div className="user-block">
                    <img
                      className="img-bordered-sm rounded-circle"
                      src="../images/user1-128x128.jpg"
                      alt="user image"
                    />
                    <span className="username">
                      <a href="#">Brayden</a>
                      <a href="#" className="pull-right btn-box-tool">
                        <i className="fa fa-times"></i>
                      </a>
                    </span>
                    <span className="description">5 minutes ago</span>
                  </div>
                  <div className="activitytimeline">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-share margin-r-5"></i> Share
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-thumbs-o-up margin-r-5"></i> Like
                        </a>
                      </li>
                      <li className="pull-right">
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-comments-o margin-r-5"></i>{" "}
                          Comments (5)
                        </a>
                      </li>
                    </ul>
                    <form className="form-element">
                      <input
                        className="form-control input-sm"
                        type="text"
                        placeholder="Type a comment"
                      />
                    </form>
                  </div>
                </div>

                <div className="post">
                  <div className="user-block">
                    <img
                      className="img-bordered-sm rounded-circle"
                      src="../images/user6-128x128.jpg"
                      alt="user image"
                    />
                    <span className="username">
                      <a href="#">Evan</a>
                      <a href="#" className="pull-right btn-box-tool">
                        <i className="fa fa-times"></i>
                      </a>
                    </span>
                    <span className="description">5 minutes ago</span>
                  </div>
                  <div className="activitytimeline">
                    <div className="row mb-20">
                      <div className="col-sm-6">
                        <img
                          className="img-fluid"
                          src="../images/photo1.png"
                          alt="Photo"
                        />
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-sm-6">
                            <img
                              className="img-fluid"
                              src="../images/photo2.png"
                              alt="Photo"
                            />
                            <br />
                            <br />
                            <img
                              className="img-fluid"
                              src="../images/photo3.jpg"
                              alt="Photo"
                            />
                          </div>
                          <div className="col-sm-6">
                            <img
                              className="img-fluid"
                              src="../images/photo4.jpg"
                              alt="Photo"
                            />
                            <br />
                            <br />
                            <img
                              className="img-fluid"
                              src="../images/photo1.png"
                              alt="Photo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="list-inline">
                      <li>
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-share margin-r-5"></i> Share
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-thumbs-o-up margin-r-5"></i> Like
                        </a>
                      </li>
                      <li className="pull-right">
                        <a href="#" className="link-black text-sm">
                          <i className="fa fa-comments-o margin-r-5"></i>{" "}
                          Comments (5)
                        </a>
                      </li>
                    </ul>

                    <form className="form-element">
                      <input
                        className="form-control input-sm"
                        type="text"
                        placeholder="Type a comment"
                      />
                    </form>
                  </div>
                </div>

                <div className="post clearfix">
                  <div className="user-block">
                    <img
                      className="img-bordered-sm rounded-circle"
                      src="../images/user7-128x128.jpg"
                      alt="user image"
                    />
                    <span className="username">
                      <a href="#">Nicholas</a>
                      <a href="#" className="pull-right btn-box-tool">
                        <i className="fa fa-times"></i>
                      </a>
                    </span>
                    <span className="description">5 minutes ago</span>
                  </div>
                  <div className="activitytimeline">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio. Praesent libero. Sed cursus ante dapibus
                      diam. Sed nisi. Nulla quis sem at nibh elementum
                      imperdiet. Duis sagittis ipsum.
                    </p>

                    <form className="form-horizontal form-element">
                      <div className="form-group row no-gutters">
                        <div className="col-sm-9">
                          <input
                            className="form-control input-sm"
                            placeholder="Response"
                          />
                        </div>
                        <div className="col-sm-3">
                          <button
                            type="submit"
                            className="btn btn-danger pull-right btn-block btn-sm"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane" id="settings">
              <div className="box p-15">
                <form className="form-horizontal form-element col-12">
                  <div className="form-group row">
                    <label
                      htmlFor="inputName"
                      className="col-sm-2 control-label"
                    >
                      Name
                    </label>

                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputName"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail"
                      className="col-sm-2 control-label"
                    >
                      Email
                    </label>

                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputPhone"
                      className="col-sm-2 control-label"
                    >
                      Phone
                    </label>

                    <div className="col-sm-10">
                      <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputExperience"
                      className="col-sm-2 control-label"
                    >
                      Experience
                    </label>

                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        id="inputExperience"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="inputSkills"
                      className="col-sm-2 control-label"
                    >
                      Skills
                    </label>

                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="inputSkills"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="ml-auto col-sm-10">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          id="basic_checkbox_1"
                          checked={false}
                        />
                        <label htmlFor="basic_checkbox_1">
                          {" "}
                          I agree to the
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#">Terms and Conditions</a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="ml-auto col-sm-10">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-5 col-xl-4">
        <div className="box box-widget widget-user">
          <div
            className="widget-user-header bg-black"
            style={{
              background: "url('../images/gallery/full/10.jpg') center center",
            }}
          >
            <h3 className="widget-user-username">Michael Jorden</h3>
            <h6 className="widget-user-desc">Designer</h6>
          </div>
          <div className="widget-user-image">
            <img
              className="rounded-circle"
              src="../images/user3-128x128.jpg"
              alt="User Avatar"
            />
          </div>
          <div className="box-footer">
            <div className="row">
              <div className="col-sm-4">
                <div className="description-block">
                  <h5 className="description-header">12K</h5>
                  <span className="description-text">FOLLOWERS</span>
                </div>
              </div>
              <div className="col-sm-4 br-1 bl-1">
                <div className="description-block">
                  <h5 className="description-header">550</h5>
                  <span className="description-text">FOLLOWERS</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="description-block">
                  <h5 className="description-header">158</h5>
                  <span className="description-text">TWEETS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-body box-profile">
            <div className="row">
              <div className="col-12">
                <div>
                  <p>
                    Email :
                    <span className="text-gray pl-10">David@yahoo.com</span>{" "}
                  </p>
                  <p>
                    Phone :
                    <span className="text-gray pl-10">+11 123 456 7890</span>
                  </p>
                  <p>
                    Address :
                    <span className="text-gray pl-10">
                      123, Lorem Ipsum, Florida, USA
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="pb-15">
                  <p className="mb-10">Social Profile</p>
                  <div className="user-social-acount">
                    <button className="btn btn-circle btn-social-icon btn-facebook">
                      <i className="fa fa-facebook"></i>
                    </button>
                    <button className="btn btn-circle btn-social-icon btn-twitter">
                      <i className="fa fa-twitter"></i>
                    </button>
                    <button className="btn btn-circle btn-social-icon btn-instagram">
                      <i className="fa fa-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div>
                  <div className="map-box">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329"
                      width="100%"
                      height="100"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-body">
            <div className="flexbox align-items-baseline mb-20">
              <h6 className="text-uppercase ls-2">Friends</h6>
              <small>20</small>
            </div>
            <div className="gap-items-2 gap-y">
              <a className="avatar" href="#">
                <img src="../images/avatar/1.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/3.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/4.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/5.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/6.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/7.jpg" alt="..." />
              </a>
              <a className="avatar" href="#">
                <img src="../images/avatar/8.jpg" alt="..." />
              </a>
              <a className="avatar avatar-more" href="#">
                +15
              </a>
            </div>
          </div>
          <div className="box-footer">
            <a className="text-uppercase d-blockls-1 text-fade" href="#">
              Invite People
            </a>
          </div>
        </div>
        <div className="box box-inverse" style={{ backgroundColor: "#3b5998" }}>
          <div className="box-header no-border">
            <span className="fa fa-facebook font-size-30"></span>
            <div className="box-tools pull-right">
              <h5 className="box-title box-title-bold">Facebook feed</h5>
            </div>
          </div>

          <blockquote className="blockquote blockquote-inverse no-border m-0 py-15">
            <p>
              Holisticly benchmark plug imperatives for multifunctional
              deliverables. Seamlessly incubate cross functional action.
            </p>
            <div className="flexbox">
              <time className="text-white" dateTime="2017-11-21 20:00">
                21 November, 2017
              </time>
              <span>
                <i className="fa fa-heart"></i> 75
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Settings;
