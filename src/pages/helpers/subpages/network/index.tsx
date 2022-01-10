import React from 'react';

import IconCoin from '~/icons/icon_coin.svg';
import { lang } from '../../lang';
import IconNTF from './icons/Illustration_NFT.svg';
import IconRumToken from './icons/Illustration_Rum_Token.svg';

export const HomepageNetwork = () => {
  lang.useLang();

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch pb-20">
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="max-w-[1000px] py-12 flex-1 text-14 text-consolas">
          <div className="flex gap-x-20">
            <div className="flex-none text-main text-main text-kanit italic text-23 tracking-wide">
              Rum Ecosystem
            </div>
            <div className="text-gray-d1 text-consolas leading-tight text-16">
              The RUM tokens can be mined by a non-GPU proof of X algorithm with less energy consuming. After the mainnet launch, the chances of winning the reward is linked to the user's contribution to the network, including the data storage and network traffic.
            </div>
          </div>

          <div className="flex gap-x-8 border border-gray-83 p-8 mt-12">
            <img className="flex-none self-end mr-4 mb-3" src={IconNTF} alt="" />
            {Array(2).fill(0).map((_, i) => (
              <div key={i}>
                <div className="text-20 text-kanit text-white tracking-wide">
                  内容交易 & NFT
                </div>
                <div className="text-16 text-consolas text-gray-d1 leading-tight mt-3">
                  Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="text-16 text-kanit text-gray-d1 mt-4">
                  <a className="inline-flex text-link-soft hover:text-main text-18 font-light tracking-wider" href="">
                    <img className="mr-3 self-center" src={IconCoin} alt="" />
                    Link a Wallet & Earn your Rum
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mt-15 mx-auto">
        <div className="w-full max-w-[1000px] mx-auto px-5 pt-10 pb-14 text-kanit">
          <div className="ml-4 flex-1 text-23 text-main italic">
            Rum Token
          </div>
          <div className="mt-4 border border-gray-83 py-4 px-5">
            <div className="text-link-soft font-light text-18 tracking-wide">
              Why Do We Need RUM Tokens?
            </div>
            <div className="flex gap-x-7 text-consolas mt-4">
              <div className="flex-1">
                <div className="text-20 text-white font-bold">
                  Anti-spam
                </div>
                <div className="mt-1 text-gray-d1">
                  Blocking or blacklists does not work on a decentralized system, so we must use an economic measure to stop abuses and spam. Any RUM network operations will need a small amount of RUM. This is the origin of the Hashcash and POW being invented, as well as the Bitcoin.
                </div>
              </div>
              <div className="flex-1">
                <div className="text-20 text-white font-bold">
                  Resources contribution incentive
                </div>
                <div className="mt-1 text-gray-d1">
                  A peer-to-peer system must provide economic incentive to minimize the Free-rider problem. Peers share their computing and network resources to help keep the RUM network secure and robust, to get rewards they deserve from the network.
                </div>
              </div>
              <img className="self-start" src={IconRumToken} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
