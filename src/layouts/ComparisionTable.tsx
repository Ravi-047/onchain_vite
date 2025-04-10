import LogoIconSecond from '../constants/icon/LogoIconSecond';
import oracle from '/assets/oracle.png';

const ComparisionTable = () => {
    return (
        <div className="flex min-w-[30rem] justify-between gap-[1.88rem]">
            {/* feature  */}
            <div className="flex w-full max-w-[9.75rem] flex-col gap-3 border-4 border-transparent py-6 md:max-w-[16.25rem] md:gap-[1.125rem] md:py-[3.12rem]">
                <div className="flex h-[2.5rem] items-center md:h-[4.5rem]">
                    <h2 className="font-euclid_bold text-xl leading-normal font-bold text-white md:text-2xl md:leading-[1.75rem]">
                        Features
                    </h2>
                </div>
                <div></div>
                <div className="flex flex-col gap-4">
                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Control
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Security
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Trust Model
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Manipulation Risk
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Cost
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Speed
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Implementation
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Best Use Case
                        </p>
                    </div>
                </div>
            </div>

            {/* on chain ai  */}
            <div className="border-purplevariant videoLinearGradient flex w-full min-w-[19.75rem] flex-col gap-3 rounded-3xl border-4 px-[2.5rem] py-[3.12rem] md:gap-[1.125rem]">
                <div className="flex h-[2.5rem] items-center md:h-[4.5rem]">
                    <div className="flex items-center gap-[1.12rem]">
                        <LogoIconSecond />
                        <h2 className="font-euclid_bold text-xl leading-normal font-bold text-white md:text-2xl md:leading-[1.75rem]">
                            Onchain AI
                        </h2>
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col gap-4">
                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Multiple Independent Nodes
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Low Risk (Distributed Data Source)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Trustless, relies on consensus
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Low (Data cross-verified)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            High (Multiple Nodes Involved)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Slightly Slower (Consensus Needed)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Complex & Requires Smart Aggragation
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whiteneutral font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            High-value applications (DeFi, Derivatives, Gaming)
                        </p>
                    </div>
                </div>
            </div>

            {/* CentralizedOracle  */}
            <div className="border-whitevariant8 whyusCardBackground flex w-full min-w-[19.75rem] flex-col gap-3 rounded-3xl border-4 px-[2.5rem] py-[3.12rem] md:gap-[1.125rem]">
                <div className="flex h-[2.5rem] items-center md:h-[4.5rem]">
                    <div className="flex items-center gap-[1.12rem]">
                        <img
                            src={oracle}
                            alt="oracle"
                            width={72}
                            height={72}
                            className="h-[4.5rem] w-[4.5rem] object-contain object-center"
                        />
                        <h2 className="font-euclid_bold text-xl leading-normal font-bold text-white md:text-2xl md:leading-[1.75rem]">
                            Centralized
                            <br />
                            Oracle
                        </h2>
                    </div>
                </div>
                <div></div>
                <div className="flex flex-col gap-4">
                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Single Entity
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            High Risk (Single Point of failure)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Requires trust in one entity
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            High (Provider can alter data)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Low (single data provider)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Fast (direct data delivery)
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Simple & Easy to Integrate
                        </p>
                    </div>

                    <div className="h-[2.5rem] md:h-[3.25rem]">
                        <p className="text-whitevariant60 font-euclid_regular text-sm leading-[1.5rem] font-normal md:text-[1.125rem]">
                            Low-risk applications (e.g., small dApps)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisionTable;
