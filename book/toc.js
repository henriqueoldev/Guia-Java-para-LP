// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introdução</a></li><li class="chapter-item expanded "><a href="Ensino/Consideracoes.html"><strong aria-hidden="true">1.</strong> Ensino</a></li><li class="chapter-item expanded "><a href="Sintaxe/Sintaxe.html"><strong aria-hidden="true">2.</strong> Sintaxe</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/Boas_Praticas.html"><strong aria-hidden="true">2.1.</strong> Boas Práticas</a></li><li class="chapter-item expanded "><a href="Sintaxe/Sintaxes_Basicas.html"><strong aria-hidden="true">2.2.</strong> Sintaxes Básicas</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/Variaveis.html"><strong aria-hidden="true">2.2.1.</strong> Variáveis</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/Variaveis_global.html"><strong aria-hidden="true">2.2.1.1.</strong> Variáveis Globais</a></li><li class="chapter-item expanded "><a href="Sintaxe/Variaveis_local.html"><strong aria-hidden="true">2.2.1.2.</strong> Variáveis Locais</a></li><li class="chapter-item expanded "><a href="Sintaxe/Variaveis_estaticas.html"><strong aria-hidden="true">2.2.1.3.</strong> Variáveis Estáticas</a></li></ol></li><li class="chapter-item expanded "><a href="Sintaxe/Vetores.html"><strong aria-hidden="true">2.2.2.</strong> Vetores</a></li><li class="chapter-item expanded "><a href="Sintaxe/Matrizes.html"><strong aria-hidden="true">2.2.3.</strong> Matrizes</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> Estruturas Condicionais</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/EstruturaCondicional_If.html"><strong aria-hidden="true">2.3.1.</strong> If</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaCondicional_Else.html"><strong aria-hidden="true">2.3.2.</strong> Else</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaCondicional_ElseIf.html"><strong aria-hidden="true">2.3.3.</strong> Else If</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaCondicional_SwitchCase.html"><strong aria-hidden="true">2.3.4.</strong> Switch Case</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> Estruturas de Repetição</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/EstruturaRepeticao_While.html"><strong aria-hidden="true">2.4.1.</strong> Enquanto (while)</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaRepeticao_For.html"><strong aria-hidden="true">2.4.2.</strong> Para (for)</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaRepeticao_DoWhile.html"><strong aria-hidden="true">2.4.3.</strong> Faça... enquanto (do-while)</a></li><li class="chapter-item expanded "><a href="Sintaxe/EstruturaRepeticao_ForEach.html"><strong aria-hidden="true">2.4.4.</strong> Para cada (for-each)</a></li></ol></li><li class="chapter-item expanded "><a href="Sintaxe/Recursividade.html"><strong aria-hidden="true">2.5.</strong> Recursividade</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.6.</strong> Modularização</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/Modularizacao_Procedimento.html"><strong aria-hidden="true">2.6.1.</strong> Procedimento</a></li><li class="chapter-item expanded "><a href="Sintaxe/Modularizacao_Funcao.html"><strong aria-hidden="true">2.6.2.</strong> Função</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.7.</strong> Bibliotecas</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_JOptionPane.html"><strong aria-hidden="true">2.7.1.</strong> JOptionPane</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_Scanner.html"><strong aria-hidden="true">2.7.2.</strong> Scanner</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_IOException.html"><strong aria-hidden="true">2.7.3.</strong> IOException</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_FileWriter.html"><strong aria-hidden="true">2.7.4.</strong> FileWriter</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_FileReader.html"><strong aria-hidden="true">2.7.5.</strong> FileReader</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_BufferedWriter.html"><strong aria-hidden="true">2.7.6.</strong> BufferedWriter</a></li><li class="chapter-item expanded "><a href="Sintaxe/Bibliotecas_BufferedReader.html"><strong aria-hidden="true">2.7.7.</strong> BufferedReader</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.8.</strong> POO</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Sintaxe/POO_InstanciamentoDeClasses.html"><strong aria-hidden="true">2.8.1.</strong> Instanciamento de Classes</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="Exercicios/Exercicios.html"><strong aria-hidden="true">3.</strong> Exercicios</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> Lote 1</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote1_Estruturas_Sequenciais.html"><strong aria-hidden="true">3.1.1.</strong> Estruturas Sequenciais</a></li><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote1_Estruturas_Decisoes.html"><strong aria-hidden="true">3.1.2.</strong> Estruturas de Decisões</a></li><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote1_Estruturas_Decisoes_Desafio.html"><strong aria-hidden="true">3.1.3.</strong> Estruturas de Decisões - Desafio</a></li><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote1_Estruturas_Repeticoes.html"><strong aria-hidden="true">3.1.4.</strong> Estruturas de Repetições</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> Lote 2</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote2_Modularizacao.html"><strong aria-hidden="true">3.2.1.</strong> Modularização</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Lote 3</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote3_Vetores.html"><strong aria-hidden="true">3.3.1.</strong> Vetores</a></li><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote3_Matrizes.html"><strong aria-hidden="true">3.3.2.</strong> Matrizes</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> Lote 4</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Exercicios/Exercicios_Lote4_Recursividade.html"><strong aria-hidden="true">3.4.1.</strong> Recursividade</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 2° Bimestre</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Exercicios/Sistema_Registros_Fisicos.html"><strong aria-hidden="true">3.5.1.</strong> Sistema com Registros Físicos</a></li><li class="chapter-item expanded "><a href="Exercicios/Aluno.html"><strong aria-hidden="true">3.5.2.</strong> Aluno</a></li><li class="chapter-item expanded "><a href="Exercicios/Transito.html"><strong aria-hidden="true">3.5.3.</strong> Trânsito</a></li><li class="chapter-item expanded "><a href="Exercicios/Eleicao.html"><strong aria-hidden="true">3.5.4.</strong> Eleição</a></li><li class="chapter-item expanded "><a href="Exercicios/Votacao.html"><strong aria-hidden="true">3.5.5.</strong> Votação</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="Explicacoes/Explicacoes.html"><strong aria-hidden="true">4.</strong> Explicações de Exercícios</a></li><li class="chapter-item expanded "><a href="Resolucoes/Resolucoes.html"><strong aria-hidden="true">5.</strong> Resolucoes</a></li><li class="chapter-item expanded "><a href="Simulados/Simulados.html"><strong aria-hidden="true">6.</strong> Simulados</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
