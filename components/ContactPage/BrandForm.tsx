import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const InquiryForm = () => {
  const [state, handleSubmit] = useForm("xyyoarvd");
  if (state.succeeded) {
    return (
      <p className="text-text py-10 font-semibold w-[400px]">
        Thanks for sending a submission! We&apos;ll review it thoroughly and
        you&apos;ll hear back from us as soon as possible
      </p>
    );
  }

  const currencies = [
    { cc: "AED", symbol: "\u062f.\u0625;", name: "UAE dirham" },
    { cc: "AFN", symbol: "Afs", name: "Afghan afghani" },
    { cc: "ALL", symbol: "L", name: "Albanian lek" },
    { cc: "AMD", symbol: "AMD", name: "Armenian dram" },
    { cc: "ANG", symbol: "NA\u0192", name: "Netherlands Antillean gulden" },
    { cc: "AOA", symbol: "Kz", name: "Angolan kwanza" },
    { cc: "ARS", symbol: "$", name: "Argentine peso" },
    { cc: "AUD", symbol: "$", name: "Australian dollar" },
    { cc: "AWG", symbol: "\u0192", name: "Aruban florin" },
    { cc: "AZN", symbol: "AZN", name: "Azerbaijani manat" },
    {
      cc: "BAM",
      symbol: "KM",
      name: "Bosnia and Herzegovina konvertibilna marka",
    },
    { cc: "BBD", symbol: "Bds$", name: "Barbadian dollar" },
    { cc: "BDT", symbol: "\u09f3", name: "Bangladeshi taka" },
    { cc: "BGN", symbol: "BGN", name: "Bulgarian lev" },
    { cc: "BHD", symbol: ".\u062f.\u0628", name: "Bahraini dinar" },
    { cc: "BIF", symbol: "FBu", name: "Burundi franc" },
    { cc: "BMD", symbol: "BD$", name: "Bermudian dollar" },
    { cc: "BND", symbol: "B$", name: "Brunei dollar" },
    { cc: "BOB", symbol: "Bs.", name: "Bolivian boliviano" },
    { cc: "BRL", symbol: "R$", name: "Brazilian real" },
    { cc: "BSD", symbol: "B$", name: "Bahamian dollar" },
    { cc: "BTN", symbol: "Nu.", name: "Bhutanese ngultrum" },
    { cc: "BWP", symbol: "P", name: "Botswana pula" },
    { cc: "BYR", symbol: "Br", name: "Belarusian ruble" },
    { cc: "BZD", symbol: "BZ$", name: "Belize dollar" },
    { cc: "CAD", symbol: "$", name: "Canadian dollar" },
    { cc: "CDF", symbol: "F", name: "Congolese franc" },
    { cc: "CHF", symbol: "Fr.", name: "Swiss franc" },
    { cc: "CLP", symbol: "$", name: "Chilean peso" },
    { cc: "CNY", symbol: "\u00a5", name: "Chinese/Yuan renminbi" },
    { cc: "COP", symbol: "Col$", name: "Colombian peso" },
    { cc: "CRC", symbol: "\u20a1", name: "Costa Rican colon" },
    { cc: "CUC", symbol: "$", name: "Cuban peso" },
    { cc: "CVE", symbol: "Esc", name: "Cape Verdean escudo" },
    { cc: "CZK", symbol: "K\u010d", name: "Czech koruna" },
    { cc: "DJF", symbol: "Fdj", name: "Djiboutian franc" },
    { cc: "DKK", symbol: "Kr", name: "Danish krone" },
    { cc: "DOP", symbol: "RD$", name: "Dominican peso" },
    { cc: "DZD", symbol: "\u062f.\u062c", name: "Algerian dinar" },
    { cc: "EEK", symbol: "KR", name: "Estonian kroon" },
    { cc: "EGP", symbol: "\u00a3", name: "Egyptian pound" },
    { cc: "ERN", symbol: "Nfa", name: "Eritrean nakfa" },
    { cc: "ETB", symbol: "Br", name: "Ethiopian birr" },
    { cc: "EUR", symbol: "\u20ac", name: "European Euro" },
    { cc: "FJD", symbol: "FJ$", name: "Fijian dollar" },
    { cc: "FKP", symbol: "\u00a3", name: "Falkland Islands pound" },
    { cc: "GBP", symbol: "\u00a3", name: "British pound" },
    { cc: "GEL", symbol: "GEL", name: "Georgian lari" },
    { cc: "GHS", symbol: "GH\u20b5", name: "Ghanaian cedi" },
    { cc: "GIP", symbol: "\u00a3", name: "Gibraltar pound" },
    { cc: "GMD", symbol: "D", name: "Gambian dalasi" },
    { cc: "GNF", symbol: "FG", name: "Guinean franc" },
    { cc: "GQE", symbol: "CFA", name: "Central African CFA franc" },
    { cc: "GTQ", symbol: "Q", name: "Guatemalan quetzal" },
    { cc: "GYD", symbol: "GY$", name: "Guyanese dollar" },
    { cc: "HKD", symbol: "HK$", name: "Hong Kong dollar" },
    { cc: "HNL", symbol: "L", name: "Honduran lempira" },
    { cc: "HRK", symbol: "kn", name: "Croatian kuna" },
    { cc: "HTG", symbol: "G", name: "Haitian gourde" },
    { cc: "HUF", symbol: "Ft", name: "Hungarian forint" },
    { cc: "IDR", symbol: "Rp", name: "Indonesian rupiah" },
    { cc: "ILS", symbol: "\u20aa", name: "Israeli new sheqel" },
    { cc: "INR", symbol: "\u20B9", name: "Indian rupee" },
    { cc: "IQD", symbol: "\u062f.\u0639", name: "Iraqi dinar" },
    { cc: "IRR", symbol: "IRR", name: "Iranian rial" },
    { cc: "ISK", symbol: "kr", name: "Icelandic kr\u00f3na" },
    { cc: "JMD", symbol: "J$", name: "Jamaican dollar" },
    { cc: "JOD", symbol: "JOD", name: "Jordanian dinar" },
    { cc: "JPY", symbol: "\u00a5", name: "Japanese yen" },
    { cc: "KES", symbol: "KSh", name: "Kenyan shilling" },
    { cc: "KGS", symbol: "\u0441\u043e\u043c", name: "Kyrgyzstani som" },
    { cc: "KHR", symbol: "\u17db", name: "Cambodian riel" },
    { cc: "KMF", symbol: "KMF", name: "Comorian franc" },
    { cc: "KPW", symbol: "W", name: "North Korean won" },
    { cc: "KRW", symbol: "W", name: "South Korean won" },
    { cc: "KWD", symbol: "KWD", name: "Kuwaiti dinar" },
    { cc: "KYD", symbol: "KY$", name: "Cayman Islands dollar" },
    { cc: "KZT", symbol: "T", name: "Kazakhstani tenge" },
    { cc: "LAK", symbol: "KN", name: "Lao kip" },
    { cc: "LBP", symbol: "\u00a3", name: "Lebanese lira" },
    { cc: "LKR", symbol: "Rs", name: "Sri Lankan rupee" },
    { cc: "LRD", symbol: "L$", name: "Liberian dollar" },
    { cc: "LSL", symbol: "M", name: "Lesotho loti" },
    { cc: "LTL", symbol: "Lt", name: "Lithuanian litas" },
    { cc: "LVL", symbol: "Ls", name: "Latvian lats" },
    { cc: "LYD", symbol: "LD", name: "Libyan dinar" },
    { cc: "MAD", symbol: "MAD", name: "Moroccan dirham" },
    { cc: "MDL", symbol: "MDL", name: "Moldovan leu" },
    { cc: "MGA", symbol: "FMG", name: "Malagasy ariary" },
    { cc: "MKD", symbol: "MKD", name: "Macedonian denar" },
    { cc: "MMK", symbol: "K", name: "Myanma kyat" },
    { cc: "MNT", symbol: "\u20ae", name: "Mongolian tugrik" },
    { cc: "MOP", symbol: "P", name: "Macanese pataca" },
    { cc: "MRO", symbol: "UM", name: "Mauritanian ouguiya" },
    { cc: "MUR", symbol: "Rs", name: "Mauritian rupee" },
    { cc: "MVR", symbol: "Rf", name: "Maldivian rufiyaa" },
    { cc: "MWK", symbol: "MK", name: "Malawian kwacha" },
    { cc: "MXN", symbol: "$", name: "Mexican peso" },
    { cc: "MYR", symbol: "RM", name: "Malaysian ringgit" },
    { cc: "MZM", symbol: "MTn", name: "Mozambican metical" },
    { cc: "NAD", symbol: "N$", name: "Namibian dollar" },
    { cc: "NGN", symbol: "\u20a6", name: "Nigerian naira" },
    { cc: "NIO", symbol: "C$", name: "Nicaraguan c\u00f3rdoba" },
    { cc: "NOK", symbol: "kr", name: "Norwegian krone" },
    { cc: "NPR", symbol: "NRs", name: "Nepalese rupee" },
    { cc: "NZD", symbol: "NZ$", name: "New Zealand dollar" },
    { cc: "OMR", symbol: "OMR", name: "Omani rial" },
    { cc: "PAB", symbol: "B./", name: "Panamanian balboa" },
    { cc: "PEN", symbol: "S/.", name: "Peruvian nuevo sol" },
    { cc: "PGK", symbol: "K", name: "Papua New Guinean kina" },
    { cc: "PHP", symbol: "\u20b1", name: "Philippine peso" },
    { cc: "PKR", symbol: "Rs.", name: "Pakistani rupee" },
    { cc: "PLN", symbol: "z\u0142", name: "Polish zloty" },
    { cc: "PYG", symbol: "\u20b2", name: "Paraguayan guarani" },
    { cc: "QAR", symbol: "QR", name: "Qatari riyal" },
    { cc: "RON", symbol: "L", name: "Romanian leu" },
    { cc: "RSD", symbol: "din.", name: "Serbian dinar" },
    { cc: "RUB", symbol: "R", name: "Russian ruble" },
    { cc: "SAR", symbol: "SR", name: "Saudi riyal" },
    { cc: "SBD", symbol: "SI$", name: "Solomon Islands dollar" },
    { cc: "SCR", symbol: "SR", name: "Seychellois rupee" },
    { cc: "SDG", symbol: "SDG", name: "Sudanese pound" },
    { cc: "SEK", symbol: "kr", name: "Swedish krona" },
    { cc: "SGD", symbol: "S$", name: "Singapore dollar" },
    { cc: "SHP", symbol: "\u00a3", name: "Saint Helena pound" },
    { cc: "SLL", symbol: "Le", name: "Sierra Leonean leone" },
    { cc: "SOS", symbol: "Sh.", name: "Somali shilling" },
    { cc: "SRD", symbol: "$", name: "Surinamese dollar" },
    { cc: "SYP", symbol: "LS", name: "Syrian pound" },
    { cc: "SZL", symbol: "E", name: "Swazi lilangeni" },
    { cc: "THB", symbol: "\u0e3f", name: "Thai baht" },
    { cc: "TJS", symbol: "TJS", name: "Tajikistani somoni" },
    { cc: "TMT", symbol: "m", name: "Turkmen manat" },
    { cc: "TND", symbol: "DT", name: "Tunisian dinar" },
    { cc: "TRY", symbol: "TRY", name: "Turkish new lira" },
    { cc: "TTD", symbol: "TT$", name: "Trinidad and Tobago dollar" },
    { cc: "TWD", symbol: "NT$", name: "New Taiwan dollar" },
    { cc: "TZS", symbol: "TZS", name: "Tanzanian shilling" },
    { cc: "UAH", symbol: "UAH", name: "Ukrainian hryvnia" },
    { cc: "UGX", symbol: "USh", name: "Ugandan shilling" },
    { cc: "USD", symbol: "US$", name: "United States dollar" },
    { cc: "UYU", symbol: "$U", name: "Uruguayan peso" },
    { cc: "UZS", symbol: "UZS", name: "Uzbekistani som" },
    { cc: "VEB", symbol: "Bs", name: "Venezuelan bolivar" },
    { cc: "VND", symbol: "\u20ab", name: "Vietnamese dong" },
    { cc: "VUV", symbol: "VT", name: "Vanuatu vatu" },
    { cc: "WST", symbol: "WS$", name: "Samoan tala" },
    { cc: "XAF", symbol: "CFA", name: "Central African CFA franc" },
    { cc: "XCD", symbol: "EC$", name: "East Caribbean dollar" },
    { cc: "XDR", symbol: "SDR", name: "Special Drawing Rights" },
    { cc: "XOF", symbol: "CFA", name: "West African CFA franc" },
    { cc: "XPF", symbol: "F", name: "CFP franc" },
    { cc: "YER", symbol: "YER", name: "Yemeni rial" },
    { cc: "ZAR", symbol: "R", name: "South African rand" },
    { cc: "ZMK", symbol: "ZK", name: "Zambian kwacha" },
    { cc: "ZWR", symbol: "Z$", name: "Zimbabwean dollar" },
  ];
  const audiences = {
    ages: [
      { value: "any", text: "Any" },
      { value: "10", text: "0-10" },
      { value: "20", text: "11-20" },
      { value: "30", text: "21-30" },
      { value: "40", text: "31-40" },
      { value: "50", text: "41-50" },
      { value: "60", text: "51-60" },
      { value: "70", text: "61-70" },
      { value: "80", text: "71-80" },
      { value: "90", text: "81-90" },
      { value: "100", text: "91-100" },
    ],
    location: [
      { value: "any", text: "Any" },
      { value: "NA", text: "North America" },
      { value: "SA", text: "South America" },
      { value: "EU", text: "Europe" },
      { value: "AF", text: "Africa" },
      { value: "AS", text: "Asia" },
      { value: "OC", text: "Oceania" },
      { value: "AN", text: "Antarctica" },
    ],
    gender: [
      { value: "any", text: "Any" },
      { value: "male", text: "Male" },
      { value: "female", text: "Female" },
      { value: "none", text: "Rather Not Specify" },
    ],
  };
  return (
    <>
      <form
        action="https://formspree.io/f/xyyoarvd"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap w-full pt-10"
      >
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="text"
            name="First Name"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders">First Name</label>
          <ValidationError
            prefix="Please enter your first name."
            field="username"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            name="Last Name"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Last Name
          </label>
          <ValidationError
            prefix="Please enter your last name."
            field="username"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="email"
            name="Email"
            id="email"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />

          <label className="floating-label text-placeholders">Email</label>
          <ValidationError
            prefix="Please enter a valid email adress."
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="tel"
            id="phone"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            name="Phone"
            autoFocus
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Phone Number
          </label>
          <ValidationError
            prefix="Please enter your phone number."
            field="phone"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            type="text"
            id="company"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Company"
            required
          />
          <label className="floating-label text-placeholders">Company</label>
          <ValidationError
            prefix="Please enter a company name."
            field="company"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            type="text"
            id="industry"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Industry"
            required
          />
          <label className="floating-label text-placeholders pl-0 sm:pl-5">
            Industry
          </label>
          <ValidationError
            prefix="Please enter a industry."
            field="industry"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pr-0 sm:pr-5">
          <input
            min={0}
            type="number"
            id="budget"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Budget"
            required
          />
          <label className="floating-label text-placeholders">Budget</label>
          <ValidationError
            prefix="Please enter a budget."
            field="budget"
            errors={state.errors}
          />
        </div>
        <div className="floating-label-group pb-12 w-full sm:w-[50%] pl-0 sm:pl-5">
          <input
            placeholder="Currency"
            type="text"
            list="currency"
            name="Currency"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <datalist
            id="currency"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
          >
            {currencies.map((currency, index) => (
              <option key={index} value={currency.cc}>
                {currency.cc}
              </option>
            ))}
          </datalist>
        </div>
        <div className="floating-label-group pb-8 w-full">
          <textarea
            id="tellUsMore"
            className="form-control bg-transparent border-b-4 w-full text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            name="Tell us more."
            required
          />
          <label className="floating-label text-placeholders">
            Tell us more
          </label>
          <ValidationError
            prefix="Please fill in this field."
            field="tellUsMore"
            errors={state.errors}
          />
        </div>
        <p className="text-text text-[20px] pb-10 font-semibold">
          What is the target audience you&apos;re trying to achieve
        </p>
        <div className="w-1/3 pr-3">
          <input
            placeholder="Age"
            type="text"
            name="Age"
            list="age"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <datalist id="age" placeholder="Ages">
            {audiences.ages.map((age, index) => (
              <option key={index} value={age.text}></option>
            ))}
          </datalist>
        </div>
        <div className="w-1/3 px-3">
          <input
            placeholder="Location"
            type="text"
            name="Location"
            list="location"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <datalist id="location" placeholder="Location">
            {audiences.location.map((x, index) => (
              <option key={index} value={x.text}>
                {x.value}
              </option>
            ))}
          </datalist>
        </div>
        <div className="w-1/3 pl-3 pb-10">
          <input
            placeholder="Gender"
            type="text"
            name="Gender"
            list="gender"
            id="username"
            className="form-control bg-transparent border-b-4 w-full  px-3 pb-3 text-[20px] border-yellow text-text placeholder:text-placeholders focus:outline-none"
            autoComplete="off"
            autoFocus
            required
          />
          <datalist id="gender" placeholder="Gender">
            {audiences.gender.map((z, index) => (
              <option key={index} value={z.text}></option>
            ))}
          </datalist>
        </div>

        <button
          className="text-black rounded-full  bg-yellow h-[70px] w-full shadow-[0_0_20px_1px_rgba(255,244,109,0.2)]"
          type="submit"
          id="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </>
  );
};

export default InquiryForm;
