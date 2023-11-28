export function TableNormal() {
  return (
    <>
      <table className="table-auto">
        <tbody>
          <tr>
            <td valign='top'>住 所</td>
            <td>
              東京都中野区本町2-48-13<br />
              Dormy＋Café中野坂上１F
            </td>
          </tr>
          <tr>
            <td valign='top'>アクセス</td>
            <td>
              ・ 東京メトロ丸ノ内線「中野坂上」駅<br />
              3番出口より徒歩30秒<br />
              ・ 都営大江戸線「中野坂上」駅<br />
              1番出口より徒歩3分<br />
            </td>
          </tr>
          <tr>
            <td valign='top'>営業時間</td>
            <td>10:30～21:00（L.O 20:30）</td>
          </tr>
          <tr>
            <td valign='top'>定休日</td>
            <td>年中無休</td>
          </tr>
          <tr>
            <td valign='top'>席 数</td>
            <td>店内 ： 38席、テラス ： 10席</td>
          </tr>
          <tr>
            <td valign='top'>予 約</td>
            <td>可</td>
          </tr>
          <tr>
            <td valign='top'>電話番号</td>
            <td>03-3377-1676</td>
          </tr>
          <tr>
            <td valign='top'>決済方法</td>
            <td>現金・カード・電子マネー・QRコード</td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
      table {
        width: 100%;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 400;
        color: #222;
      }
      `}</style>
    </>
  );
}
