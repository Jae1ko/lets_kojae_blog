const link = () => {
    document.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId: any = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};
export default link;
