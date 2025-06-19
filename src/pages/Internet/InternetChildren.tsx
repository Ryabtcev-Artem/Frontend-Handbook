import InternetPreview from "./InternetPreview.tsx";
import Intro from "./Intro/Intro.tsx";
import HowInternetWork from "./HowInternetWork/HowInternetWork.tsx";
import Connection from "./Connection/Connection.tsx";
import IpAddress from "./IpAddress/IpAddress.tsx";
import Dns from "./Dns/Dns.tsx";
import HowHyperTextWork from "./HowHyperTextWork/HowHyperTextWork.tsx";
import Http from "./Http/Http.tsx";
import HttpsAndTls from "./HttpsAndTls/HttpsAndTls.tsx";
import ModelOsi from "./ModelOsi/ModelOsi.tsx";
import ModelTcpIp from "./ModelTcpIp/ModelTcpIp.tsx";
import RestApi from "./RestApi/RestApi.tsx";
import WebSocket from "./WebSocket/WebSocket.tsx";
import GraphQl from "./GraphQl/GraphQl.tsx";
import ClientAndServer from "./ClientAndServer/ClientAndServer.tsx";


export const InternetChildren = [
  { path: "", element: <InternetPreview />},
  { path: 'Intro', element: <Intro /> },
  { path: 'HowInternetWork', element: <HowInternetWork /> },
  { path: 'Connection', element: <Connection /> },
  { path: 'IpAddress', element: <IpAddress /> },
  { path: 'Dns', element: <Dns /> },
  { path: 'HowHyperTextWork', element: <HowHyperTextWork /> },
  { path: 'ClientAndServer', element: <ClientAndServer /> },
  { path: 'Http', element: <Http /> },
  { path: 'HttpsAndTls', element: <HttpsAndTls /> },
  { path: 'ModelOsi', element: <ModelOsi /> },
  { path: 'ModelTcpIp', element: <ModelTcpIp /> },
  { path: 'RestApi', element: <RestApi /> },
  { path: 'WebSocket', element: <WebSocket /> },
  { path: 'GraphQl', element: <GraphQl /> },
]