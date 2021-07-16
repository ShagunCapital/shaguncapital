import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { BeforeHybrid, DifferentHybrid, HowInvest, Sip, WhoHybrid, WhyHybrid, WhyShagun } from 'src/app/Header';

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.css']
})
export class HybridComponent implements OnInit {

  diffHybrid: DifferentHybrid[] = [
    {
      point: "Conservative Hybrid Fund",
      desc: "This type of fund invests majority (at least 75% of total assets) in debt securities and the rest in equity. Since it invests primarily in debt instruments, it is relatively risk free.",
      active: true
    },
    {
      point: "Balanced Hybrid Fund",
      desc: "This kind of hybrid fund allocates its assets in equity/equity related instruments and debt securities in equal halves.",
      active: true
    },
    {
      point: "Aggressive Hybrid Fund",
      desc: "This fund predominantly invests in equities( at least 65% of total assets) and the rest in equity.",
      active: true
    },
    {
      point: "Dynamic Asset Allocation",
      desc: "When the fund manager invests in equity and debt securities depending on the current market conditions with no specific percentage being allocated to debt and equity securities, it is called Dynamic Asset Allocation.",
      active: true
    },
    {
      point: "Multi-Asset Allocation",
      desc: "This fund also has a dynamically managed investment portfolio, with assets invested in three or more asset classes. Investment in foreign securities is not counted as separate asset class.",
      active: true
    },
    {
      point: "Arbitrage Fund and Equity Savings",
      desc: "This fund uses arbitrage strategy to make profits. They make use of the price difference in various markets and capitalize on the imbalance. Minimum investment in equities or equity related instruments is 65% of total assets.",
      active: true
    },
  ]

  whoInvest: WhoHybrid[] = [
    {
      li: "Conservative investors seeking low-risk investment avenues coupled with higher returns than those from debt funds can consider investing in Hybrid Funds.",
      active: true
    },
    {
      li: "Hybrid Funds is a good investment option for novice investors who want substantial equity exposure in their overall portfolio, without taking high risk.",
      active: true
    },
    {
      li: "Since there is significant allocation to equities in Hybrid Funds, it is suitable for investors with long term investment horizon.",
      active: true
    }
  ]

  whyInvest: WhyHybrid[] = [
    {
      li: "The debt allocation of the fund helps in effectively mitigating market risk, and balances out the risk arising from equity investment.",
      active: true
    },
    {
      li: "Since there is further classification of hybrid funds, based on their exposure to various asset classes, they are suitable for a wide variety of investors with different risk profiles. If an investor is inclined towards equity, s/he can invest in Aggressive Hybrid Funds, whereas a risk-averse investor can opt Conservative Hybrid Funds for investment.",
      active: true
    }
  ]

  beforeInvestHy: BeforeHybrid[] = [
    {
      point: "Financial goals",
      desc: "Investors should be clear about their financial goals, and how a particular scheme is going to help in achieving those goals. If the expected returns from this scheme are in alignment with the financial objectives of the investor, then only s/he should go ahead with the investment.",
      active: true
    },
    {
      point: "Risk Appetite",
      desc: "Investors with moderate risk appetite can opt for Hybrid Funds. As these have substantial equity allocation, these funds do carry market risk. However, significant debt allocation ensures that risk",
      active: true
    },
    {
      point: "Investment Horizon",
      desc: "Hybrid funds are considered ideal for investors with medium to long term investment horizon. The past performance record of hybrid funds suggest that they are good to invest in with a 4+ year of investment horizon. One also benefit from the Power of compounding if one remains invested for a long term.",
      active: true
    },
    {
      point: "Expense Ratio of the Fund",
      desc: "Expense Ratio refers to an annual fee that an Asset Management Company charges to manage your assets. It is a specific percentage on your investment returns. You should choose a fund which has a low expense ratio, as high expense ratio decreases your Net Asset Value (NAV) thereby decreasing your effective payout at the time of redemption.",
      active: true
    }
  ]

  howInvestHy: HowInvest[] = [
    {
      li: "Sign Up/Sign In to Paisabazaar.com and go to ‘Direct Funds’",
      active: true
    },
    {
      li: "Click on the section of ‘Hybrid Funds’",
      active: true
    },
    {
      li: "Select the fund of your choice from the list of options . You can also compare similar funds as well as use SIP Calculator or Lumpsum Calculator to estimate the future value of your investment.",
      active: true
    },
    {
      li: "Click on ‘Invest Now’, select either Lump sum or SIP",
      active: true
    },
  ]
  
  whyShagun: WhyShagun[] = [
    {
      li: "Trusted website, no commission charges and no paperwork",
      active: true
    },
    {
      li: "You can compare more than 1,700 Funds at one platform instead of visiting the website of each AMC and then searching for numerous funds",
      active: true
    },
    {
      li: "Easy to browse as Funds are segregated under Equity, Debt, Large Cap, ELSS, etc. You can further add filters of ratings, returns, fund houses.",
      active: true
    },
    {
      li: "Important scheme details such as latest Net Asset Value (NAV), expense ratio, assets under management, etc are also available on the portal, making it easier for consumers to pick a suitable fund.",
      active: true
    },
  ]

  faq: Sip[] = [
    {
      ques: "What is Net Asset Value (NAV) of a scheme?",
      ans: "NAV of a mutual fund scheme refers to the market value of one unit of the fund. It is calculated by dividing the total assets under management by total number of fund units.",
      active: true
    },
    {
      ques: "What is an Exit Load?",
      ans: "Exit Load refers to a small amount of fee charged by a Mutual Fund Scheme, when an investor redeems the fund units before 1 year of investment.",
      active: true
    },
    {
      ques: "What is an Expense ratio?",
      ans: "Expense Ratio refers to a small amount of fee charged by Asset Management Companies annually to manage investors’ assets. It covers the operating and managing cost incurred by the AMC. It is a percentage of the total assets invested by the investor.",
      active: true
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
