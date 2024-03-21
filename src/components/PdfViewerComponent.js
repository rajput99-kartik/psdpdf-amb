import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");
      await PSPDFKit.load({
        // licenseKey: 'bWBj9a5jNRmuwy2-5-wEaW03r56qclHpxCzYru6YG5bAsGGvbTzQr96XXh8B2onkxBrt31AUNqYnNaE77ZGiB1ToJxn9jc3vKAAzvOZ6nX7S64us3YyjZY1PONkhdPXY3oZkiWTq0r_03RdcvR7J6HI2mufcyWMKHEsoiEAlBvq7DfALzXdU0gizqwzJFmsY8hqJ5-zPqRR9GsD3zsglpn-7-yJ_GCn59UBizDbruThcNAYczXhH7DLgmkpTsOO8e49J_WaX2nbIRpUV6ZSWYiQG0t0r0IZCh-ZWCDjIkOUVFjY',
        container,
        
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [props.document]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
