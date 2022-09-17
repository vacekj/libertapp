(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[54],{1543:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var i={messages:{Accept:"Akzeptieren",Acknowledge:"Anerkennen",Allow:"Erlauben","Allow in your wallet":"Lassen Sie es in Ihrer Brieftasche zu","Allow {symbol} first":["Lassen Sie zuerst ",["symbol"]," zu"],"Allowance pending":"Genehmigung ausstehend","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Beim Versuch, diesen Swap auszuf\xfchren, ist ein Fehler aufgetreten. M\xf6glicherweise m\xfcssen Sie Ihre Schlupftoleranz erh\xf6hen. Wenn dies nicht funktioniert, liegt m\xf6glicherweise eine Inkompatibilit\xe4t mit dem Token vor, den Sie handeln. Hinweis: Geb\xfchren f\xfcr Transfer- und Rebase-Token sind nicht mit Uniswap V3 kompatibel.","Approval pending":"Best\xe4tigung ausstehend",Approve:"Best\xe4tigen","Approve in your wallet":"Genehmigen Sie in Ihrer Brieftasche","Approve {symbol} first":["Genehmigen Sie zuerst ",["symbol"]],Auto:"Autom.","Auto Router":"Automatischer Router",Close:"Schlie\xdfen","Confirm in your wallet":"Best\xe4tigen Sie in Ihrer Brieftasche","Confirm swap":"Tausch best\xe4tigen","Connect wallet":"Wallet verbinden","Connect wallet to swap":"Wallet zum Tausch verbinden","Connecting\u2026":"\u2026","Convert {0} to {1}":["Wandle ",["0"]," in ",["1"],"um"],"Disconnect wallet":"Brieftasche trennen",Dismiss:"Verwerfen","Enter an amount":"Betrag eingeben","Error details":"Fehlerdetails","Error fetching trade":"Fehler beim Abrufen des Handels","Fetching best price\u2026":"Abrufen des besten Preises\u2026",For:"Daf\xfcr","High price impact":"Hohe Preiswirkung","High slippage":"Hoher Schlupf","High slippage increases the risk of price movement":"Eine hohe Slippage erh\xf6ht das Risiko von Preisbewegungen","I don't have a wallet":"Ich habe keine Brieftasche","Insufficient liquidity in the pool for your trade":"Unzureichende Liquidit\xe4t im Pool f\xfcr Ihren Handel","Insufficient {0} balance":["Unzureichendes ",["0"]," Guthaben"],"Invalid recipient":"Ung\xfcltiger Empf\xe4nger","Liquidity provider fee":"Geb\xfchr des Liquidit\xe4tsanbieters",Max:"Max.","Max slippage":"Max. Schlupf","Maximum sent":"Maximum gesendet","Minimum received":"Minimum erhalten","Missing dependencies":"Fehlende Abh\xe4ngigkeiten","No results found.":"Keine Ergebnisse gefunden.","No tokens are available on this network. Please switch to another network.":"In diesem Netzwerk sind keine Token verf\xfcgbar. Bitte wechseln Sie zu einem anderen Netzwerk.",OFF:"AUS",ON:"EIN","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["Die Ausgabe wird gesch\xe4tzt. Sie erhalten mindestens ",["0"]," ",["1"]," oder die Transaktion wird r\xfcckg\xe4ngig gemacht."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["Die Ausgabe wird gesch\xe4tzt. Sie senden h\xf6chstens ",["0"]," ",["1"]," oder die Transaktion wird r\xfcckg\xe4ngig gemacht."],"Please enter a valid slippage %":"Bitte geben Sie eine g\xfcltige Slippage % ein","Powered by the Uniswap protocol":"Unterst\xfctzt durch das Uniswap-Protokoll","Price impact":"Preisauswirkung","Price updated":"Preis aktualisiert","Recent transactions":"K\xfcrzliche Transaktionen","Reload the page":"Seite neu laden",Reset:"Zur\xfccksetzen","Review swap":"Bewertungstausch","Search by token name or address":"Suche nach Token-Name oder -Adresse","Select a token":"Token ausw\xe4hlen",Settings:"Einstellungen","Slippage tolerance":"Schlupftoleranz","Something went wrong.":"Etwas ist schief gelaufen.",Swap:"Tauschen","Swap confirmed":"Tausch best\xe4tigt","Swap details":"Swap-Details","Swap failed: {0}":["Tausch fehlgeschlagen: ",["0"]],"Swap pending":"Tausch anstehend","Swap summary":"Swap-Zusammenfassung",Switch:"Schalter","Switch network":"Netzwerk wechseln","Switch network in your wallet":"Wechseln Sie das Netzwerk in Ihrer Brieftasche","Switching network":"Netzwerk wechseln","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Die Uniswap-Invariante x*y=k wurde durch den Tausch nicht erf\xfcllt. Dies bedeutet normalerweise, dass einer der Token, die Sie austauschen, ein benutzerdefiniertes Verhalten bei der \xdcbertragung enth\xe4lt.","The input token cannot be transferred. There may be an issue with the input token.":"Der eingegebene Token kann nicht \xfcbertragen werden. M\xf6glicherweise liegt ein Problem mit dem Token vor.","The output token cannot be transferred. There may be an issue with the output token.":"Der Ausgabe-Token kann nicht \xfcbertragen werden. M\xf6glicherweise liegt ein Problem mit dem Token vor.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Das Ausgabetoken kann nicht \xfcbertragen werden. M\xf6glicherweise liegt ein Problem mit dem Ausgabetoken vor. Hinweis: Geb\xfchren f\xfcr Transfer- und Rebase-Token sind nicht mit Uniswap V3 kompatibel.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"Die Transaktion konnte nicht gesendet werden, da die Frist abgelaufen ist. Bitte \xfcberpr\xfcfen Sie, ob Ihre Transaktionsfrist nicht zu niedrig ist.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Diese Transaktion wird aufgrund von Preisbewegungen nicht erfolgreich sein. Versuchen Sie, Ihre Schlupftoleranz zu erh\xf6hen. Hinweis: Geb\xfchren f\xfcr Transfer- und Rebase-Token sind nicht mit Uniswap V3 kompatibel.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Diese Transaktion wird nicht erfolgreich sein, entweder aufgrund von Preisbewegungen oder aufgrund von Geb\xfchr-bei-Transfer. Versuchen Sie, Ihre Schlupftoleranz zu erh\xf6hen.","Transaction confirmed":"Transaktion best\xe4tigt","Transaction deadline":"Transaktionsfrist","Transaction pending":"Transaktion ausstehend","Transaction rejected.":"Transaktion abgelehnt.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Versuchen Sie, Ihre Schlupftoleranz zu erh\xf6hen.<0/>HINWEIS: Geb\xfchren f\xfcr Transfer- und Rebase-Token sind nicht mit Uniswap V3 kompatibel.","Unexpected error. Could not estimate gas for the swap.":"Unerwarteter Fehler. Gas f\xfcr den Tausch konnte nicht gesch\xe4tzt werden.","Unexpected issue with estimating the gas. Please try again.":"Unerwartetes Problem bei der Sch\xe4tzung des Gases. Bitte versuche es erneut.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Unbekannter Fehler",["0"],". Versuchen Sie, Ihre Schlupftoleranz zu erh\xf6hen. Hinweis: Geb\xfchren f\xfcr Transfer- und Rebase-Token sind nicht mit Uniswap V3 kompatibel."],"Unsupported network - switch to another to trade":"Nicht unterst\xfctztes Netzwerk - Wechseln Sie zu einem anderen, um zu handeln","Unwrap confirmed":"Auspacken best\xe4tigt","Unwrap pending":"Auspacken steht an","View on Etherscan":"Auf Etherscan ansehen","Your transaction will revert if it has been pending for longer than this period of time.":"Ihre Transaktion wird r\xfcckg\xe4ngig gemacht, wenn sie l\xe4nger als dieser Zeitraum aussteht.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Ihre Transaktion wird r\xfcckg\xe4ngig gemacht, wenn sich der Preis ung\xfcnstig um mehr als diesen Prozentsatz \xe4ndert.",minutes:"Minuten","{0} {1}":[["0"]," ",["1"]],"{caption}":[["caption"]],"{integrator} fee":[["integrator"]," Geb\xfchr"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"s"]}}}}]);
//# sourceMappingURL=54.8943a6ac.chunk.js.map