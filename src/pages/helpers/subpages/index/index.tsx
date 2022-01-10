import React from 'react';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Dialog } from '@mui/material';
import { Close } from '@mui/icons-material';

import IconCoin from '~/icons/icon_coin.svg';
import IconNode from '~/icons/icon_node.svg';
import IconGithub from '~/icons/icon_github.svg';

import { AppBox } from '../../AppBox';
import { lang } from '../../lang';
import IconDecentralized from './icons/icon_decentralized.svg';
import IconPrivacy from './icons/icon_privacy.svg';
import IconToken from './icons/icon_token.svg';
import ArchDiagram from './icons/arch_diagram.svg';

import './index.local.sass';

export const HomepageIndex = observer(() => {
  const state = useLocalObservable(() => ({
    open: false,
  }));
  lang.useLang();

  const handleOpenDialog = action(() => {
    state.open = true;
  });

  const handleCloseDialog = action(() => {
    state.open = false;
  });

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex justify-center">
      <div className="flex flex-1 justify-center mx-5 my-10 px-5 max-w-[1200px] bg-black bg-opacity-70">
        <div className="max-w-[1000px] flex-1 text-16 text-gray-d1 py-16 text-kanit">
          <div className="grid gap-x-[10px] gap-y-[10px] grid-cols-2 text-white">
            <div className="flex flex-center border border-gray-83 p-14">
              <div className="text-main text-17 font-extralight italic">
                <span className="text-23">
                  <span className="font-normal">
                    RumSystem
                  </span>
                  :
                </span> an open-source<br />
                P2P application infrastructure to offer<br />
                <span className="font-normal text-23">
                  the internet alternatives
                </span>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="flex flex-center gap-x-6">
                <img className="flex-none" src={IconDecentralized} alt="" />
                <div>
                  <div className="text-20">
                    Decentralized
                  </div>

                  <div className="text-consolas text-gray-d1 leading-tight mt-2">
                    <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.</p>
                    <p className="mt-2">Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
                    <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
                    <p className="mt-2">There are no centralized server providers to store or process data.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconNode} alt="" />
                  Join as a node
                </a>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                Own your Data
              </div>

              <div className="text-consolas text-gray-d1 leading-tight">
                <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.</p>
                <p className="mt-2">Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
                <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
                <p className="mt-2">There are no centralized server providers to store or process data.</p>
              </div>
            </div>

            <div className="flex flex-center gap-x-6 border border-gray-83 px-8 py-6">
              <div>
                <div className="text-20">
                  Privacy
                </div>

                <div className="text-consolas text-gray-d1 leading-tight">
                  <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.</p>
                  <p className="mt-2">Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
                  <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
                  <p className="mt-2">There are no centralized server providers to store or process data.</p>
                </div>
              </div>
              <img className="flex-none" src={IconPrivacy} alt="" />
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="flex flex-center gap-x-6">
                <div>
                  <div className="text-20">
                    内容交易 & NFT
                  </div>

                  <div className="text-consolas text-gray-d1 leading-tight mt-2">
                    <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
                    <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
                    <p className="mt-2">There are no centralized server providers to store or process data.</p>
                  </div>
                </div>
                <img className="flex-none" src={IconToken} alt="" />

              </div>
              <div className="flex justify-start mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconCoin} alt="" />
                  Link a Wallet & Earn your Rum
                </a>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                Open-Source
              </div>

              <div className="text-consolas text-gray-d1 leading-tight">
                <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.</p>
                <p className="mt-2">Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
                <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
                <p className="mt-2">There are no centralized server providers to store or process data.</p>
              </div>

              <div className="flex justify-end mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconGithub} alt="" />
                  Our GitHub & Docs
                </a>
              </div>
            </div>

          </div>

          <AppBox className="mt-14 border border-gray-70" />

          <div className="flex flex-center gap-x-12 max-w-[820px] mx-auto mt-10">
            <div className="text-24 text-main flex-none uppercase">
              HOW<br />
              RumSystem<br />
              WORKS
            </div>
            <div className="text-consolas text-gray-d1 leading-tight">
              <p className="mt-2">In the RUM system users are organized into groups, and each group will share a blockchain.</p>
              <p className="mt-2">Group’s data will be encrypted and sync with all related users as events. All data will be stored in the group-shared-blockchain and eventually be consistent.</p>
              <p className="mt-2">Applications can replay the blockchain locally and render the results on the user interface and interact with users.</p>
              <p className="mt-2">There are no centralized server providers to store or process data.</p>
            </div>
          </div>

          <div className="flex-col flex-center mt-14">
            <img src={ArchDiagram} alt="" />

            <span
              className="text-link-soft font-light text-14 mt-1 cursor-pointer"
              onClick={handleOpenDialog}
            >
              View larger network architecture diagram
            </span>
          </div>

          <div className="flex gap-x-20 text-consolas leading-tight mt-14">
            <div className="flex-1">
              <span className="font-bold uppercase text-white">Peer</span>: A user with a pair of keys and connects to the peer-to-peer network.
              <br />
              <br />
              <span className="font-bold uppercase text-white">Group (SeedNet)</span>: Multi peers or single peer can be organized into groups (SeedNet). A group can represent any online applications, a twitter-like SNS, a reddit-like community or a personal cloud notebook.
              <br />
              <br />
              <span className="font-bold uppercase text-white">Group Owner</span>: The creator of a group is the group owner, who will record any valid events transactions in this group and produce new blocks onto old blocks.
              Group owners have more privileges, including authorizing other peers (as producers) to produce new blocks, or denying some peers to send events in this group.
              <br />
              <br />
              <span className="font-bold uppercase text-white">Producer</span>: Any peers with a public IP address and open ports (including port forwarding/UPnP) can become a producer,who can help the group owner to produce new blocks without reading encrypted events/messages. Producers may receive crypto incentives as reward from the group owner or users, depending on the consensus.
            </div>
            <div className="flex-1">
              <span className="font-bold uppercase text-white">Event/Message</span>: Any activity from users is regarded as an event, for example, creating a post, updating avatars, and replying to a post. Event transactions will be broadcast to the group owner and all producers, waiting to be recorded into the new block. RUM uses a subset of Activity Vocabulary Core Types to represent event types. Blockchain: Events transactions will be recorded into blocks, then be linked together to become a blockchain.
              <br />
              <br />
              <span className="font-bold uppercase text-white">Gossip Network</span>: There are no centralized servers in the RUM network, the network is only constructed by peers. All event transactions/messages will be passed along to their neighbours peers until target peers receive it eventually.
              <br />
              <br />
              <span className="font-bold uppercase text-white">Bootstrap</span>: Bootstrap node is an address book which can help your peers to discover others peers through the DHT-KAD protocol. You can use AddPeer api to add any normal peers which you trust to bootstrap. However, bootstrap node/DHT is not the only way -- a peer will discover others by peer-exchange protocol in the gossip network.
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={state.open}
        onClose={handleCloseDialog}
        maxWidth="lg"
        disableScrollLock
      >
        <div className="flex flex-center w-full h-full bg-gray-0c relative">
          <div
            className="text-gray-ec text-22 p-4 top-0 right-0 absolute cursor-pointer z-10"
            onClick={handleCloseDialog}
          >
            <Close />
          </div>

          <img className="w-[100vw] max-w-[900px]" src={ArchDiagram} alt="" />
        </div>
      </Dialog>
    </div>
  );
});
