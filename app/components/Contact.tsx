export default function Contact() {
    return (
        <section
            id="contact"
            className="px-[var(--pad)] max-w-[var(--max)] mx-auto"
            style={{ paddingBottom: '150px' }}
        >
            <h2
                className="display"
                style={{
                    fontSize: 'clamp(27px,3.7vw,66px)',
                    color: 'var(--fg)',
                    whiteSpace: 'nowrap',
                    textAlign: 'left',
                    marginTop: '10px',
                }}
            >
                Let's Shake Things Up.
            </h2>
        </section>
    );
}
