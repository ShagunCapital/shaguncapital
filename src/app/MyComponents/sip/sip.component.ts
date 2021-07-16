import { Component, OnInit } from '@angular/core';
import { Sip } from 'src/app/Header';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.css']
})
export class SipComponent implements OnInit {

  faq: Sip[] = [
    {
      ques: "What if I miss a SIP installment?",
      ans: "In case you miss a SIP installment or two, you will neither be charged extra nor your plan will be discontinued. You can miss up to 3 installments. Automated SIP installment may get missed because of low account balance. In this case, banks may charge for not maintaining minimum balance. Some AMCs allow the option of pausing SIP installments for about a few months (3 to 6) for some schemes.",
      active: true
    },
    {
      ques: "Do all investments through SIP have tax benefits?",
      ans: "No, it depends on the scheme. Not all mutual fund schemes are Tax Saver Plans and hence not all SIPs have tax benefits. Tax Saver SIPs also known as Equity Linked Saving Schemes (ELSS) are the only SIP plans with tax saving benefits under Section 80C of the Income Tax Act. It also comes with a lock-in period of 3 years.",
      active: true
    },
    {
      ques: "Can I withdraw from an ELSS SIP before 3 years?",
      ans: "No, you can’t withdraw from ELSS before 3 years. Money from other SIPs who don’t have a lock in period can be withdrawn.",
      active: true
    },
    {
      ques: "Which SIP is best for 5 years?",
      ans: "Any plan outperforming in the market can be considered for SIP. Table given in the article above lists the best mutual fund schemes based on 5 Year Returns on a certain date.",
      active: true
    },
    {
      ques: "What is NAV in SIP?",
      ans: " NAV – Net Asset Value is the cost of one unit of a fund’s shares. It is calculated as the difference between the fund’s total assets and its liabilities, divided by the total number of shares.",
      active: true
    },    
    {
      ques: "Can I reduce my SIP amount or increase my duration?",
      ans: "Yes. Both are possible. After the completion of tenure of the SIP, it can be extended. Also, there are various types of SIPs as explained above where investors have the option to periodically increase or rather change the installment amount as per the need. It depends on the fund scheme.",
      active: true
    },    
    {
      ques: "What is a Flexi SIP?",
      ans: "A Flexi SIP is the one which allows you to change the amount of your investments every month. If you don’t want a fixed amount of installment and want more control over it, you can set up a Flexi SIP. You need to specify a default amount for your investments.",
      active: true
    },    
    {
      ques: "What is the best time to start SIP?",
      ans: "There is no such fixed time but as soon as you become a salaried person, it is suggested to invest at least 1/10th of your salary in SIP. Market conditions keep changing and hence it is always recommended to stay invested for long.",
      active: true
    }, 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
