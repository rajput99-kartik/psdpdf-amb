import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");
      await PSPDFKit.load({
        licenseKey: 'mmiPjc3TwZ6LTNcMFediBpE6QbRmoMGvjDR8IG7T9nuGdQvv_ZH3RZlsKl4-CeWLj1nIYPHgPWotxa_7lTY7SspB2zAJAr-ePAb3clI3hhNXiXVS7QjKVf5dAQgIH-ko1mVzhlfjJtcjnQhEcIhRC2Da8_dsXOf5yNyTy8ZLHofYXBZUap7wP9ZdAdCXQIEoVMeIzGe-N6fVpLBov44x0WfGDTkuvCS6e9YRHHmxQ-9FP5kr01KjrfkGK1uxSYgZfJ4MpyiXcQOrAhYvksaJsoLMk9OkuM2tax9YsQmMePYvoLKEHBk_g29tcnOBNwzudJA9JXeb4eQ13b4fUz5TROEgtneMW_CxYyPlaCd0YctUVHv_7v95tccINLF6nbUKb6-Jju6BfBGbKXh88DgRqrh7bdVUD3bqEzBd4UGKVapPCcPyFBqj-JKxxqezOISJV5rEg825AsiBAq5Nd9lHh9OiZlbQNrnZLrOhQKwNV4WsDtkNrUu3Eij1wTlAbO26X5ivJoK9Jf8ZbIgZ_neeWNov7QgIpmLV7r3O_Olp_PacpQxvyyuo68VevOUyFoyE',
        container,
        
        document: props.document,
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, [props.document]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
