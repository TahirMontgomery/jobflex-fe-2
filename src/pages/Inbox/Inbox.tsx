import React from "react";

function Inbox() {
  return (
    <div className="row">
      <div className="col-xl-2 col-lg-4 col-12">
        <button
          className="btn btn-danger btn-block mb-30"
          type="button"
          data-toggle="modal"
          data-target=".bs-example-modal-lg"
        >
          Compose
        </button>

        <div
          className="modal fade bs-example-modal-lg"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myLargeModalLabel">
                  Compose New Message
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input className="form-control" placeholder="To:" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="Subject:" />
                </div>
                <div className="form-group">
                  <textarea
                    id="compose-textarea"
                    className="form-control"
                    style={{ height: "300px" }}
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="btn btn-info btn-file">
                    <i className="fa fa-paperclip"></i> Attachment
                    <input type="file" name="attachment" />
                  </div>
                  <p className="help-block">Max. 32MB</p>
                </div>
              </div>
              <div className="modal-footer">
                <div className="pull-right">
                  <button type="button" className="btn btn-default">
                    <i className="fa fa-pencil"></i> Draft
                  </button>
                  <button type="submit" className="btn btn-success">
                    <i className="fa fa-envelope-o"></i> Send
                  </button>
                </div>
                <button type="reset" className="btn btn-danger">
                  <i className="fa fa-times"></i> Discard
                </button>
                <button
                  type="button"
                  className="btn btn-danger text-left"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-header with-border">
            <h4 className="box-title">Folders</h4>
            <ul className="box-controls pull-right">
              <li>
                <a className="box-btn-slide" href="#"></a>
              </li>
            </ul>
          </div>
          <div className="box-body no-padding mailbox-nav">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="javascript:void(0)">
                  <i className="ion ion-ios-email-outline"></i> Inbox
                  <span className="label label-success pull-right">12</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="ion ion-paper-airplane"></i> Sent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="ion ion-email-unread"></i> Drafts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="ion ion-star"></i> Starred{" "}
                  <span className="label label-warning pull-right">14</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="ion ion-trash-a"></i> Trash
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="box-header with-border">
            <h4 className="box-title">Labels</h4>
            <ul className="box-controls pull-right">
              <li>
                <a className="box-btn-slide" href="#"></a>
              </li>
            </ul>
          </div>
          <div className="box-body no-padding mailbox-nav">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-circle-o text-danger"></i> Important
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-circle-o text-warning"></i> Promotions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-circle-o text-info"></i> Social
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-bx">
          <div className="media-list media-list-hover">
            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-success" href="#">
                <img src="../images/avatar/1.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Sarah Kortney</a>
                </p>
              </div>
            </div>

            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-danger" href="#">
                <img src="../images/avatar/2.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Tommy Nash</a>
                </p>
              </div>
            </div>

            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-warning" href="#">
                <img src="../images/avatar/3.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Kathryn Mengel</a>
                </p>
              </div>
            </div>

            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-primary" href="#">
                <img src="../images/avatar/4.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Mayra Sibley</a>
                </p>
              </div>
            </div>

            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-success" href="#">
                <img src="../images/avatar/1.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Tommy Nash</a>
                </p>
              </div>
            </div>

            <div className="media py-10 px-0 align-items-center">
              <a className="avatar avatar-lg status-danger" href="#">
                <img src="../images/avatar/2.jpg" alt="..." />
              </a>
              <div className="media-body">
                <p className="font-size-16">
                  <a href="#">Williemae Lagasse</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-8 col-12">
        <div className="box">
          <div className="box-header with-border">
            <h4 className="box-title">Inbox</h4>
            <div className="box-controls pull-right">
              <div className="box-header-actions">
                <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                  <input type="text" name="s" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
          <div className="box-body">
            <div className="mailbox-controls">
              <button
                type="button"
                className="btn btn-primary btn-sm checkbox-toggle"
              >
                <i className="ion ion-android-checkbox-outline-blank"></i>
              </button>
              <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-trash-a"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-reply"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-share"></i>
                </button>
              </div>
              <div className="btn-group">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ion ion-flag margin-r-5"></i>
                    <span className="caret"></span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ion ion-folder margin-r-5"></i>
                    <span className="caret"></span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-sm">
                <i className="fa fa-refresh"></i>
              </button>
              <div className="pull-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fa fa-chevron-left"></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mailbox-messages inbox-bx">
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment"></td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star-o text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment">
                        <i className="fa fa-paperclip"></i>
                      </td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star-o text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment">
                        <i className="fa fa-paperclip"></i>
                      </td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment"></td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment"></td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star-o text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment">
                        <i className="fa fa-paperclip"></i>
                      </td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star-o text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment">
                        <i className="fa fa-paperclip"></i>
                      </td>

                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="mailbox-star">
                        <a href="#">
                          <i className="fa fa-star text-yellow"></i>
                        </a>
                      </td>
                      <td>
                        <p className="mailbox-name mb-0 font-size-16 font-weight-600">
                          Johen Doe
                        </p>
                        <a className="mailbox-subject" href="#">
                          <b>Lorem Ipsum</b> - There are many variations of
                          Ipsum available...
                        </a>
                      </td>
                      <td className="mailbox-attachment"></td>
                      <td className="mailbox-date">2:45 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="box-footer">
            <div className="mailbox-controls">
              <button
                type="button"
                className="btn btn-primary btn-sm checkbox-toggle"
              >
                <i className="ion ion-android-checkbox-outline-blank"></i>
              </button>
              <div className="btn-group">
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-trash-a"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-reply"></i>
                </button>
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="ion ion-share"></i>
                </button>
              </div>
              <div className="btn-group">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ion ion-flag margin-r-5"></i>
                    <span className="caret"></span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ion ion-folder margin-r-5"></i>
                    <span className="caret"></span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-sm">
                <i className="fa fa-refresh"></i>
              </button>
              <div className="pull-right">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fa fa-chevron-left"></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-12">
        <div className="box">
          <div className="box-body pt-10">
            <div className="mailbox-read-info">
              <h4>Your message title goes here</h4>
            </div>
            <div className="mailbox-read-info clearfix mb-20">
              <div className="float-left mr-10">
                <a href="#">
                  <img
                    src="../images/1.jpg"
                    alt="user"
                    width="40"
                    className="rounded-circle"
                  />
                </a>
              </div>
              <h5 className="no-margin">
                {" "}
                Pavan kumar
                <br />
                <small>From: jonathan@domain.com</small>
                <span className="mailbox-read-time pull-right">
                  22 JUL. 2019 08:03 PM
                </span>
              </h5>
            </div>
            <div className="mailbox-controls with-border clearfix">
              <div className="float-left">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  data-toggle="tooltip"
                  title="Print"
                >
                  <i className="fa fa-print"></i>
                </button>
              </div>
              <div className="float-right">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="tooltip"
                    data-container="body"
                    title="Delete"
                  >
                    <i className="fa fa-trash-o"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="tooltip"
                    data-container="body"
                    title="Reply"
                  >
                    <i className="fa fa-reply"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="tooltip"
                    data-container="body"
                    title="Forward"
                  >
                    <i className="fa fa-share"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mailbox-read-message read-mail-bx">
              <p>Dear USer,</p>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem.Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>

              <p>
                enean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar.
              </p>

              <p>
                Thanks,
                <br />
                Jane
              </p>
            </div>
          </div>
          <div className="box-footer">
            <h5>
              <i className="fa fa-paperclip m-r-10 m-b-10"></i> Attachments{" "}
              <span>(3)</span>
            </h5>
            <ul className="mailbox-attachments clearfix">
              <li>
                <div className="mailbox-attachment-info">
                  <a href="#" className="mailbox-attachment-name">
                    <i className="fa fa-paperclip"></i> Mag.pdf
                  </a>
                  <span className="mailbox-attachment-size">
                    5,215 KB
                    <a href="#" className="btn btn-primary btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <div className="mailbox-attachment-info">
                  <a href="#" className="mailbox-attachment-name">
                    <i className="fa fa-paperclip"></i> Documents.docx
                  </a>
                  <span className="mailbox-attachment-size">
                    2,145 KB
                    <a href="#" className="btn btn-primary btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-footer">
            <div className="pull-right">
              <button type="button" className="btn btn-success">
                <i className="fa fa-reply"></i> Reply
              </button>
              <button type="button" className="btn btn-info">
                <i className="fa fa-share"></i> Forward
              </button>
            </div>
            <button type="button" className="btn btn-danger">
              <i className="fa fa-trash-o"></i>
            </button>
            <button type="button" className="btn btn-warning">
              <i className="fa fa-print"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
