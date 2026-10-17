<div align="center">
  <img src="images/logo.png" alt="Logotipo da Cutelaria Tradifor" width="260">

  # TRADIFOR — Cutelaria Artesanal

  **Arte Forjada em Aço**

  Facas artesanais exclusivas, produzidas sob medida em Votuporanga, São Paulo.

  [🌐 Acessar o site](https://www.tradifor.com.br) · [📸 Instagram](https://www.instagram.com/tradifor) · [💬 WhatsApp](https://wa.me/5517981163513)
</div>

---

## Sobre o projeto

Este repositório contém o código-fonte do site institucional da **Cutelaria Tradifor**, uma vitrine digital dedicada à apresentação de facas artesanais, peças personalizadas e acessórios.

A Tradifor trabalha com **peças sob encomenda**, desenvolvidas de acordo com as preferências de cada cliente. Seu portfólio apresenta trabalhos com aços especiais, aço Damasco e diferentes materiais e acabamentos.

Além do portfólio, o site oferece um **Marketplace de Coleções**, destinado à divulgação de peças de colecionadores, com curadoria e intermediação da Tradifor. As negociações são conduzidas por contato direto; **não há checkout ou processamento de pagamentos integrado ao site**.

## Funcionalidades

- **Página inicial:** apresentação da marca e de sua proposta artesanal.
- **Galeria de facas:** portfólio com fotografias, descrições técnicas e visualização ampliada em modal.
- **Galeria de acessórios:** exposição de peças complementares, como tábuas artesanais.
- **Marketplace de Coleções:** vitrine de itens cadastrados, com informações opcionais de preço e vendedor.
- **Contato direto:** atalhos para WhatsApp e redes sociais.
- **Layout responsivo:** navegação adaptada a computadores e dispositivos móveis.
- **Publicação estática:** estrutura compatível com hospedagem no GitHub Pages e domínio próprio.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
| --- | --- |
| **HTML5** | Estrutura e conteúdo das páginas |
| **CSS3** | Identidade visual, responsividade e animações |
| **JavaScript (Vanilla JS)** | Galerias, modais e interações |
| **Google Fonts** | Tipografia com Cinzel e Cormorant Garamond |
| **GitHub Pages** | Hospedagem de conteúdo estático |

O projeto não depende de frameworks JavaScript, gerenciadores de pacotes ou etapa de compilação.

## Estrutura do repositório

```text
tradifor/
├── images/                # Fotografias, miniaturas, logo, ícones e acessórios
├── images-temp/           # Imagens das peças anunciadas no marketplace
├── CNAME                  # Domínio personalizado do site
├── index.html             # Página inicial e portfólio
├── styles.css             # Estilos gerais
├── script.js              # Dados e interações do portfólio
├── marketplace.html       # Página do Marketplace de Coleções
├── marketplace.css        # Estilos específicos do marketplace
├── marketplace.js         # Cadastro e exibição dos itens do marketplace
└── README.md              # Documentação do projeto
```

## Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/ricdon/tradifor.git
   cd tradifor
   ```

2. Abra o arquivo `index.html` em um navegador **ou** utilize um servidor HTTP local:

   ```bash
   python -m http.server 8000
   ```

3. Acesse:

   - Página inicial: `http://localhost:8000/`
   - Marketplace: `http://localhost:8000/marketplace.html`

> O servidor local é opcional para as páginas estáticas, mas recomendado para testar o site em condições semelhantes às de publicação.

## Atualizar o portfólio

Os itens do portfólio são cadastrados diretamente em `script.js`.

1. Salve a fotografia em `images/`.
2. Adicione uma miniatura correspondente na mesma pasta.
3. Inclua um novo objeto no array `images`, mantendo o padrão existente:

   ```javascript
   {
     src: 'images/image49.jpg',
     thumbnail: 'images/thumbnail49.jpg',
     description: 'Faca artesanal / Aço especial / Cabo personalizado'
   }
   ```

4. Confira a galeria e a visualização ampliada no navegador.

Para cadastrar **acessórios**, utilize o array `accessories` no mesmo arquivo, com imagens na pasta `images/acessories/`.

> Os nomes acima são exemplos. Escolha arquivos e numeração que não sobrescrevam imagens existentes.

## Atualizar o Marketplace de Coleções

Os anúncios do marketplace são definidos manualmente no array `marketplaceItems`, em `marketplace.js`.

1. Adicione a imagem principal e a miniatura à pasta `images-temp/`.
2. Cadastre o item no array:

   ```javascript
   {
     src: 'images-temp/image1.jpg',
     thumbnail: 'images-temp/thumbnail1.jpg',
     description: 'Peça de coleção / Aço Damasco / Bainha artesanal',
     price: 'R$ 1.200,00',
     seller: 'Coleção Particular'
   }
   ```

3. Verifique a exibição do anúncio e seu modal em `marketplace.html`.

O campo `price` pode ficar vazio para ocultar o valor, e `seller` é opcional. Se `marketplaceItems` estiver vazio, a página apresenta uma mensagem informando que não existem peças disponíveis no momento.

**Importante:** adicionar arquivos em `images-temp/` não publica anúncios automaticamente: é necessário cadastrar cada peça em `marketplace.js`.

## Publicação

O repositório contém um arquivo `CNAME` com o domínio `www.tradifor.com.br`, previsto para utilização com o GitHub Pages.

Para configurar ou conferir a publicação:

1. No GitHub, abra **Settings → Pages**.
2. Em **Build and deployment**, selecione a implantação a partir de uma branch, quando aplicável.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Confira o domínio personalizado e a configuração DNS correspondente.
5. Após salvar e publicar, teste as páginas e os links do site.

Para enviar alterações feitas localmente:

```bash
git add .
git commit -m "Atualiza conteúdo do site Tradifor"
git push origin main
```

## Contato

**Cutelaria Tradifor** — Votuporanga, SP, Brasil.

- **Site:** https://www.tradifor.com.br
- **Instagram:** https://www.instagram.com/tradifor
- **WhatsApp:** https://wa.me/5517981163513
- **Repositório:** https://github.com/ricdon/tradifor

## Direitos de uso

As fotografias, elementos de identidade visual e demais conteúdos da Tradifor não devem ser reutilizados comercialmente sem autorização dos respectivos titulares.

Este repositório não apresenta um arquivo `LICENSE` na versão analisada. A disponibilidade pública do código no GitHub, por si só, **não significa que ele esteja sob uma licença de código aberto**.

---

<div align="center">
  <strong>TRADIFOR · Arte Forjada em Aço</strong><br>
  <sub>Cutelaria artesanal, tradição e exclusividade.</sub>
</div>
