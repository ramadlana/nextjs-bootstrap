import Link from "next/link";

export default function SuccessPayment() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="modal-content">
            <div className="modal-status bg-success" />
            <div className="modal-body text-center py-4">
              {/* Download SVG icon from http://tabler-icons.io/i/circle-check */}
              {/* SVG icon code with class="mb-2 text-green icon-lg" */}
              <h3>Payment Processed</h3>
              <div className="text-muted">
                Pembayaran anda telah di proses. Terimakasih
              </div>
            </div>
            <div className="modal-footer ">
              <div className="justify-content-center">
                <Link href="/">
                  <a className="btn m-1">Go to dashboard</a>
                </Link>

                <a href="#" className="btn btn-success m-1 ">
                  View invoice
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
