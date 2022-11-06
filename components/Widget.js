export default function Widget() {
  return (
    <>
      <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,ethereum,eos,ripple,litecoin,dogecoin"
        currency="usd"
        
        locale="en"
      ></coingecko-coin-price-marquee-widget>
      {/* <div
        style={{
          height: 35,
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          boxSizing: 'border-box',
          border: '1px #56667F',
          borderRadius: 4,
          textAlign: 'right',
          lineHeight: 14,
          blockSize: 40,
          fontSize: 12,
          fontFeatureSettings: 'normal',
          textSizeAdjust: '100%',
          boxShadow: 'inset 0 -20px 0 0 #56667F',
          padding: 0,
          margin: 0,
          width: '100%',
        }}
      >
        <div style={{ height: 40, padding: 0, margin: 0, width: '100%' }}>
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            style={{ border: 0, margin: 0, padding: 0 }}
            width="100%"
            height="40px"
            frameBorder={0}
          />
        </div>
        <div
          style={{
            color: '#FFFFFF',
            lineHeight: 14,
            fontWeight: 400,
            fontSize: 11,
            boxSizing: 'border-box',
            padding: '2px 6px',
            width: '100%',
            fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
          }}
        ></div>
      </div> */}
    </>
  );
}
