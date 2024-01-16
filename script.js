document.addEventListener("DOMContentLoaded", function() {
    // 반복할 횟수 설정
    const numberOfArticles = 5;

    // 반복하여 article 생성
    for (let i = 0; i < numberOfArticles; i++) {
        createArticle();
    }

    function createArticle() {
        // article 요소 생성
        const article = document.createElement("article");

        // article 내부 요소들 생성 및 추가
        article.innerHTML = `
            <div>
                <img class="imageBox" src="./profile.jpeg" alt="profile"/>
            </div>
            <div class="textBox">
                <div class="mainTextBox">Designing Dashboards</div>
                <div class="detailTextBox">
                    <div class="year">
                        2020
                    </div>
                    <div class="part">
                        Web
                    </div>
                </div>
                <div class="subTextBox">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </div>
            </div>
        `;

        // 생성한 article을 페이지에 추가
        document.getElementById("articleContainer").appendChild(article);
    }
});
