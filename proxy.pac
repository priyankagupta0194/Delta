function FindProxyForURL(url, host) {
               // SAP Domains sent DIRECT
               if ((dnsDomainIs(host, ".sap-ag.de")) ||
               (dnsDomainIs(host, ".sap.corp")) ||
               (dnsDomainIs(host, ".wlan.sap.com")) ||
               (dnsDomainIs(host, ".corp.sap"))||
               (dnsDomainIs(host, ".co.sap.com")) ||
               (dnsDomainIs(host, ".sap.biz")) ||
               (dnsDomainIs(host, "idesmobilegw1.tdc.sap.com")) ||
               (dnsDomainIs(host, "saplivevpn-f.akamaihd.net")) ||
               (dnsDomainIs(host, ".cloud.sap")) ||
               (dnsDomainIs(host, ".infra.hana.ondemand.com")) ||
               (dnsDomainIs(host, ".saphosting.corp")) ||
               (isPlainHostName(host)))
               {
                              return "DIRECT";
               }
               
               // Terumo
               if (dnsDomainIs(host, "dltqbggat.hrhec.delta.com"))
               {
                              if(url.substring(0,5) == "http:")
                              {
                                             return "PROXY sapserv1a.wdf.sap.corp:8787";
                              }
                              if(url.substring(0,6) == "https:")
                              {
                                             return "PROXY sapserv1a.wdf.sap.corp:8788";
                              }
               }

               return "PROXY proxy:8080";
}
