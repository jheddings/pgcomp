<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <xsl:template match="/">
    <xsl:apply-templates />
  </xsl:template>

  <xsl:template match="pg-comp">
    <html>
      <head>
        <title>PGC: <xsl:value-of select="@map"/></title>
      </head>

      <body>
        <h1><xsl:value-of select="@map"/></h1>

        <div id="overview">
          <h2>Overview</h2>
          <xsl:apply-templates select="overview" />
        </div>

        <div id="limits">
          <h2>Limits</h2>
          <table id="limits-table">
            <tr>
              <th>Players</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th>
            </tr>
            <tr>
              <th>Regions</th><xsl:apply-templates select="limits/regions" />
            </tr>
            <tr>
              <th>Max Plants</th><xsl:apply-templates select="limits/max-plants" />
            </tr>
            <tr>
              <th>Remove</th><xsl:apply-templates select="limits/remove-cards" />
            </tr>
            <tr>
              <th>Step 2</th><xsl:apply-templates select="limits/step-2" />
            </tr>
            <tr>
              <th>End Game</th><xsl:apply-templates select="limits/end-game" />
            </tr>
          </table>
        </div>

        <div id="preparation">
          <h2>Preparation</h2>
          <xsl:apply-templates select="preparation" />
        </div>

        <xsl:apply-templates select="turn-order" />

        <div id="restock">
          <h2>Restocking Rates</h2>
          <table id="restock-table">
            <tr>
              <th>Players</th>
              <th colspan="3">2</th>
              <th colspan="3">3</th>
              <th colspan="3">4</th>
              <th colspan="3">5</th>
              <th colspan="3">6</th>
            </tr>
            <tr>
              <th>Step</th>
              <th>1</th><th>2</th><th>3</th>
              <th>1</th><th>2</th><th>3</th>
              <th>1</th><th>2</th><th>3</th>
              <th>1</th><th>2</th><th>3</th>
              <th>1</th><th>2</th><th>3</th>
            </tr>
            <tr>
              <th>Coal</th><xsl:apply-templates select="restock/coal" />
            </tr>
            <tr>
              <th>Oil</th><xsl:apply-templates select="restock/oil" />
            </tr>
            <tr>
              <th>Trash</th><xsl:apply-templates select="restock/trash" />
            </tr>
            <tr>
              <th>Nuke</th><xsl:apply-templates select="restock/nuke" />
            </tr>
          </table>
        </div>

        <div id="notes">
          <h2>Notes / Remarks</h2>
          <xsl:apply-templates select="notes" />
        </div>

        <div id="footer">
          <ul class="navbar">
            <li><a href="index.html">Home</a></li>
          </ul>
        </div>

      </body>
    </html>
  </xsl:template>

  <xsl:template match="overview">
    <div class="intro-item">
      <xsl:value-of select="." />
    </div>
  </xsl:template>

  <xsl:template match="limits">
    <tr>
      <td><xsl:value-of select="@players" /></td>
      <xsl:apply-templates />
    </tr>
  </xsl:template>

  <xsl:template match="turn-order">
    <ol id="turn-order">
      <xsl:apply-templates select="turn" />
    </ol>
  </xsl:template>

  <xsl:template match="turn">
    <li>
      <xsl:value-of select="." />
      <xsl:if test="@order">
        (<xsl:value-of select="@order" />)
      </xsl:if>
    </li>
  </xsl:template>

  <xsl:template match="preparation">
    <div class="prep-item">
      <xsl:if test="@players">
        <span class="annotation">Players: <xsl:value-of select="@players" /></span>
      </xsl:if>

      <xsl:if test="@step">
        <span class="annotation">Step: <xsl:value-of select="@step" /></span>
      </xsl:if>

      <xsl:value-of select="." />
    </div>
  </xsl:template>

  <xsl:template match="notes">
    <div class="note-item">
      <xsl:if test="@players">
        <span class="annotation">Players: <xsl:value-of select="@players" /></span>
      </xsl:if>

      <xsl:if test="@step">
        <span class="annotation">Step: <xsl:value-of select="@step" /></span>
      </xsl:if>

      <xsl:value-of select="." />
    </div>
  </xsl:template>

  <xsl:template match="restock[@step='1']">
    <tr>
      <xsl:if test="@players">
        <td rowspan="3"><xsl:value-of select="@players" /></td>
      </xsl:if>
      <td><xsl:value-of select="@step" /></td>
      <xsl:apply-templates select="coal" />
      <xsl:apply-templates select="oil" />
      <xsl:apply-templates select="trash" />
      <xsl:apply-templates select="nuke" />
    </tr>
  </xsl:template>

  <xsl:template match="restock[@step!='1']">
    <tr>
      <td><xsl:value-of select="@step" /></td>
      <xsl:apply-templates select="coal" />
      <xsl:apply-templates select="oil" />
      <xsl:apply-templates select="trash" />
      <xsl:apply-templates select="nuke" />
    </tr>
  </xsl:template>

  <xsl:template match="limits/regions">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="limits/max-plants">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="limits/remove-cards">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="limits/step-2">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="limits/end-game">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="restock/coal">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="restock/oil">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="restock/trash">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

  <xsl:template match="restock/nuke">
    <td><xsl:value-of select="." /></td>
  </xsl:template>

</xsl:stylesheet>
