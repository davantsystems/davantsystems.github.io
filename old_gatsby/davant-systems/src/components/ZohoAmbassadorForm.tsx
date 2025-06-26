import React, { useEffect } from 'react';

const ZohoAmbassadorForm: React.FC = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = 'https://qtrxb-cmpzourl.maillist-manage.com/js/optin.min.js';
    //     script.onload = () => {
    //         // @ts-ignore
    //         setupSF('sf3z75cea4543803c4e4bde18b7ed118b8b51cfc46b4c3a181bec19788ecd1406365', 'ZCFORMVIEW', false, 'acc', false, '2');
    //     };
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // const runOnFormSubmit = (th: any) => {
    //     // Before submit, if you want to trigger your event, "include your code here"
    // };

    return (
        <>
            <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
            <iframe frameBorder="0" id="iframewin" width="100%" height="2000px" src="https://qtrxb-cmpzourl.maillist-manage.com/ua/Optin?od=11287ecca10f9a&zx=132c9c623&tD=111d9744311ba67a9&sD=111d9744311bb176f"></iframe>
            {/* <meta content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
      <div id="sf3z75cea4543803c4e4bde18b7ed118b8b51cfc46b4c3a181bec19788ecd1406365" data-type="signupform">
        <div id="customForm">
          <input type="hidden" id="recapTheme" value="2" />
          <input type="hidden" id="isRecapIntegDone" value="false" />
          <input type="hidden" id="recapMode" value="1286187000000092015" />
          <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
          <div id="SIGNUP_PAGE" className="SIGNUP_PAGE large_form_2_css">
            <div>
              <div>
                <div id="imgBlock" data-logo="true"></div>
              </div>
              <br />
              <div id="signupMainDiv">
                <div>
                  <div style={{ position: 'relative' }}>
                    <div
                      id="Zc_SignupSuccess"
                      style={{
                        display: 'none',
                        position: 'absolute',
                        marginLeft: '4%',
                        width: '90%',
                        backgroundColor: 'white',
                        padding: '3px',
                        border: '3px solid rgb(194, 225, 154)',
                        marginTop: '10px',
                        marginBottom: '10px',
                        wordBreak: 'break-all'
                      }}
                    >
                      <table width="100%" cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td width="10%">
                              <img className="successicon" src="https://qtrxb-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" alt="success" />
                            </td>
                            <td>
                              <span id="signupSuccessMsg" style={{ color: 'rgb(73, 140, 132)', fontFamily: 'sans-serif', fontSize: '14px', wordBreak: 'break-word' }}>
                                &nbsp;&nbsp;Thank you for Signing Up
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <form method="POST" id="zcampaignOptinForm" action="https://qtrxb-cmpzourl.maillist-manage.com/weboptin.zc" target="_zcSignup">
                    <div id="SIGNUP_BODY_ALL">
                      <h1 id="SIGNUP_HEADING">
                        Join Our Newsletter
                      </h1>
                      <div id="SIGNUP_BODY">
                        <div>
                          <div id="SIGNUP_DESCRIPTION">
                            Please complete this form to create an account, receive email updates and much more.
                          </div>
                          <div id="errorMsgDiv">&nbsp;&nbsp;Please correct the marked field(s) below.</div>
                          <div>
                            <div className="zcsffieldsdiv">
                              <div className="zcsffield" data-fieldid="1286187000000000021">
                                <div>
                                  <div>
                                    Contact Email&nbsp;
                                    <span>*</span>
                                  </div>
                                  <div>
                                    <input name="CONTACT_EMAIL" maxLength={100} type="email" required />
                                    <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">
                                      1,true,6,Contact Email,2
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="zcsffield" data-fieldid="1286187000000000023">
                                <div>
                                  <div>First Name&nbsp;</div>
                                  <div>
                                    <input name="FIRSTNAME" maxLength={100} type="text" />
                                    <span style={{ display: 'none' }} id="dt_FIRSTNAME">
                                      1,false,1,First Name,2
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="zcsffield" data-fieldid="1286187000000000025">
                                <div>
                                  <div>Last Name&nbsp;</div>
                                  <div>
                                    <input name="LASTNAME" maxLength={50} type="text" />
                                    <span style={{ display: 'none' }} id="dt_LASTNAME">
                                      1,false,1,Last Name,2
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="recaptcha" style={{ padding: '10px 0px 10px 10px' }} id="captchaOld">
                              <div>
                                <div id="captchaParent">
                                  <img
                                    src="//campaigns.zoho.com/images/refresh_icon.png"
                                    onClick={() =>
                                      // @ts-ignore
                                      loadCaptcha(
                                        'https://campaigns.zoho.com/campaigns/CaptchaVerify.zc?mode=generate',
                                        this,
                                        '#sf3z75cea4543803c4e4bde18b7ed118b8b51cfc46b4c3a181bec19788ecd1406365'
                                      )
                                    }
                                    id="relCaptcha"
                                    alt="refresh captcha"
                                  />
                                  <div id="captchaDiv" data-captcha="true"></div>
                                  <input placeholder="Captcha" id="captchaText" name="captchaText" maxLength={100} type="text" />
                                  <span>*</span>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" id="secretid" value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs" />
                            <div></div>
                            <div id="REQUIRED_FIELD_TEXT">
                              *Required Fields
                            </div>
                            <div>
                              <input type="button" id="zcWebOptin" name="SIGNUP_SUBMIT_BUTTON" value="Join Now" />
                            </div>
                            <input type="hidden" id="fieldBorder" value="" />
                            <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                            <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" />
                            <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                            <input type="hidden" id="lD" name="lD" value="111d9744311bb177e" />
                            <input type="hidden" name="emailReportId" id="emailReportId" value="" />
                            <input type="hidden" name="zx" id="cmpZuid" value="132c9c623" />
                            <input type="hidden" name="zcvers" value="3.0" />
                            <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                            <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                            <input type="hidden" id="zcld" name="zcld" value="111d9744311bb177e" />
                            <input type="hidden" id="zctd" name="zctd" value="111d9744311ba67a9" />
                            <input type="hidden" id="document_domain" value="" />
                            <input type="hidden" id="zc_Url" value="qtrxb-cmpzourl.maillist-manage.com" />
                            <input type="hidden" id="new_optin_response_in" value="0" />
                            <input type="hidden" id="duplicate_optin_response_in" value="0" />
                            <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z75cea4543803c4e4bde18b7ed118b8b51cfc46b4c3a181bec19788ecd1406365" />
                          </div>
                          <input type="hidden" id="isCaptchaNeeded" value="true" />
                          <input type="hidden" id="superAdminCap" value="0" />
                          <img src="https://qtrxb-cmpzourl.maillist-manage.com/images/spacer.gif" onLoad={() => referenceSetter(this)} id="refImage" alt="spacer" />
                        </div>
                        <div id="privacyNotes" data-identity="privacyNotes">
                          <span>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="zcOptinOverLay"
        onContextMenu={() => false}
        style={{ display: 'none', textAlign: 'center', backgroundColor: 'rgb(0, 0, 0)', opacity: 0.5, zIndex: 100, position: 'fixed', width: '100%', top: 0, left: 0, height: '988px' }}
      ></div>
      <div
        id="zcOptinSuccessPopup"
        style={{
          display: 'none',
          zIndex: 9999,
          width: '800px',
          height: '40%',
          top: '84px',
          position: 'fixed',
          left: '26%',
          backgroundColor: '#FFFFFF',
          borderColor: '#E6E6E6',
          borderStyle: 'solid',
          borderWidth: '1px',
          boxShadow: '0 1px 10px #424242',
          padding: '35px'
        }}
      >
        <span style={{ position: 'absolute', top: '-16px', right: '-14px', zIndex: 99999, cursor: 'pointer' }} id="closeSuccess">
          <img src="https://qtrxb-cmpzourl.maillist-manage.com/images/videoclose.png" alt="close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div> */}
        </>
    );
}

export default ZohoAmbassadorForm;
