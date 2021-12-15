import React from 'react'

export default function DashboardFooter() {
    return (
        <div>
            
            <div className="dashboard-footer-spacer"></div>
        <div className="small-footer margin-top-15">
            <div className="small-footer-copyrights">
                © {(new Date().getFullYear())} <strong>Handiworks</strong>. All Rights Reserved.
            </div>
            <ul className="footer-social-links">
                <li>
                    <a href="#" title="Facebook" data-tippy-placement="top">
                        <i className="icon-brand-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="Twitter" data-tippy-placement="top">
                        <i className="icon-brand-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="Instagram" data-tippy-placement="top">
                        <i className="icon-brand-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#" title="LinkedIn" data-tippy-placement="top">
                        <i className="icon-brand-linkedin-in"></i>
                    </a>
                </li>
            </ul>
            <div className="clearfix"></div>
        </div>

        </div>
    )
}
